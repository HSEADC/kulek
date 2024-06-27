import React from 'react'

const M_cardSearch = ({ srcImg, tags, nameCard, descCard, url }) => {
  return (
    <a href={url}>
      <div className="M_cardSearch">
        <img
          src={srcImg}
          alt="Картинка карточки"
          className="A_pictureCardSearch"
        />
        <div className="W_allTextSearch">
          <div className="M_tagsType">
            {tags.map((tag, index) => (
              <div key={index} className="A_tagButton">
                #{tag}
              </div>
            ))}
          </div>
          <h1 className="A_nameArticleSearch">{nameCard}</h1>
          <p className="A_subArticleSearch">{descCard}</p>
        </div>
      </div>
    </a>
  )
}

export default M_cardSearch
