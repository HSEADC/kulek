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

    cards.forEach((card) => {
      const tagsInCard = Array.from(
        card.querySelectorAll('.C_subTagsMain .A_subTagNewMain p')
      ).map((p) => p.innerText.replace('#', ''))

      if (
        selectedTags.length === 0 ||
        selectedTags.some((tag) => tagsInCard.includes(tag))
      ) {
        card.style.display = 'flex'
      } else {
        card.style.display = 'none'
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
      if (title.includes(lowerCaseQuery)) {
        card.style.display = 'flex'
      } else {
        card.style.display = 'none'
      }
    })
  }

  const searchInput = document.querySelector('.A_Input input')

  searchInput.addEventListener('input', function () {
    filterTestsByTitle(this.value)
  })
})
