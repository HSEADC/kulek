import React, { useEffect, useState } from 'react'
import { createRoot } from 'react-dom/client'
import M_cardSearch from '../components/M_cardSearch/M_cardSearch.jsx'
import { getPostTeasers } from './searchData'

const getSearchInputValue = () => {
  const url = new URL(window.location.href)
  const searchParams = new URLSearchParams(url.search)
  return searchParams.get('q') || ''
}

const decodeHTMLEntities = (text) => {
  const textarea = document.createElement('textarea')
  textarea.innerHTML = text
  return textarea.value
}

const S_SearchContent = ({ searchInputValue }) => {
  const [postTeasers, setPostTeasers] = useState([])
  const [filteredArticles, setFilteredArticles] = useState([])

  useEffect(() => {
    getPostTeasers().then((data) => {
      setPostTeasers(data)
      filterArticles(data, searchInputValue)
    })
  }, [])

  useEffect(() => {
    filterArticles(postTeasers, searchInputValue)
  }, [searchInputValue, postTeasers])

  const filterArticles = (articles, query) => {
    const lowercasedQuery = query.toLowerCase()
    const nbspRegex = /[\u202F\u00A0]/gm
    const punctuationRegex = /[.,\/#!$%\^&\*;:{}=\-_`~()]/gm

    const filtered = articles.filter((article) => {
      const title = decodeHTMLEntities(article.title)
        .replace(nbspRegex, ' ')
        .replace(punctuationRegex, '')
        .toLowerCase()

      const description = decodeHTMLEntities(article.description)
        .replace(nbspRegex, ' ')
        .replace(punctuationRegex, '')
        .toLowerCase()

      return (
        title.includes(lowercasedQuery) || description.includes(lowercasedQuery)
      )
    })

    setFilteredArticles(filtered)
    updateHeader(query, filtered.length)
  }

  const updateHeader = (query, articleCount) => {
    const header = document.querySelector('.A_nameSearch')
    if (header) {
      const totalCount = articleCount
      header.textContent = `По запросу "${query}" нашлось ${totalCount} материалов`
    }
  }

  return (
    <>
      {filteredArticles.map((article) => (
        <M_cardSearch
          nameCard={
            <span dangerouslySetInnerHTML={{ __html: article.title }} />
          }
          descCard={
            <span dangerouslySetInnerHTML={{ __html: article.description }} />
          }
          key={article.id}
          url={article.url}
          srcImg={article.image}
          tags={article.tags}
        />
      ))}
    </>
  )
}

const searchInputValue = getSearchInputValue()

const container = document.querySelector('.O_allCardsSearch')
const root = createRoot(container)
root.render(<S_SearchContent searchInputValue={searchInputValue} />)
