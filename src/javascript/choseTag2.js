document.addEventListener('DOMContentLoaded', function () {
  const tagButtons = document.querySelectorAll(
    '.W_allTagsTests .A_subTagNewMain'
  )
  let selectedTags = []

  tagButtons.forEach((button) => {
    button.addEventListener('click', function () {
      const tag = this.innerText.replace('#', '')
      if (selectedTags.includes(tag)) {
        selectedTags = selectedTags.filter((t) => t !== tag)
        this.style.color = '#888888'
        this.style.border = '0.104vw solid #888888'
      } else {
        selectedTags.push(tag)
        this.style.color = '#000'
        this.style.border = '0.104vw solid #000'
      }

      filterCards()
    })
  })

  function filterCards() {
    const cards = document.querySelectorAll(
      '.M_middle2CardMain, .M_middleCardMainTests'
    )
    const screenWidth = window.innerWidth

    cards.forEach((card) => {
      const initialDisplay = card.getAttribute('data-initial-display')
      const isIphoneCard = card.id === 'M_middle2CardMainIphone'
      if (screenWidth < 912) {
        if (isIphoneCard) {
          card.style.display = 'none'
        } else {
          if (initialDisplay === 'none') {
            card.style.display = 'flex'
          } else {
            card.style.display = 'flex'
          }
        }
      } else {
        const tagsInCard = Array.from(
          card.querySelectorAll('.C_subTagsMain .A_subTagNewMain p')
        ).map((p) => p.innerText.replace('#', ''))

        if (
          selectedTags.length === 0 ||
          selectedTags.some((tag) => tagsInCard.includes(tag))
        ) {
          if (initialDisplay === 'none') {
            card.style.display = 'none'
          } else {
            card.style.display = 'flex'
          }
        } else {
          card.style.display = 'none'
        }
      }
    })

    const rightBlocks = document.querySelectorAll('.right')

    rightBlocks.forEach((rightBlock, index) => {
      if (rightBlock.children.length === 1 && rightBlocks[index + 1]) {
        const nextRightBlock = rightBlocks[index + 1]
        let itemsAdded = 0

        while (
          rightBlock.children.length < 2 &&
          itemsAdded < nextRightBlock.children.length
        ) {
          const firstItem = nextRightBlock.children[itemsAdded]
          const initialDisplay = firstItem.getAttribute('data-initial-display')
          if (initialDisplay !== 'none') {
            rightBlock.appendChild(firstItem)
          }

          itemsAdded++
        }
      }
    })
  }

  function filterTestsByTitle(query) {
    const cards = document.querySelectorAll(
      '.M_middle2CardMain, .M_middleCardMainTests'
    )
    const lowerCaseQuery = query.toLowerCase()

    cards.forEach((card) => {
      const title = card.querySelector('h2').textContent.toLowerCase()
      const initialDisplay = card.getAttribute('data-initial-display')

      if (title.includes(lowerCaseQuery)) {
        if (initialDisplay !== 'none') {
          card.style.display = 'flex'
        }
      } else {
        card.style.display = 'none'
      }
    })
  }

  const searchInput = document.querySelector('.A_Input input')

  searchInput.addEventListener('input', function () {
    filterTestsByTitle(this.value)
  })

  filterCards()

  const cards = document.querySelectorAll(
    '.M_middle2CardMain, .M_middleCardMainTests'
  )
  cards.forEach((card) => {
    card.setAttribute(
      'data-initial-display',
      window.getComputedStyle(card).getPropertyValue('display')
    )
  })
})
