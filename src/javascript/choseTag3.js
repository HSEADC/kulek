document.addEventListener('DOMContentLoaded', function () {
  const tagButtons = document.querySelectorAll(
    '.W_allTagsTests .A_subTagNewMain'
  )
  let selectedTags = []

  tagButtons.forEach((button) => {
    button.addEventListener('click', function () {
      const tag = this.innerText

      console.log(tag)

      if (selectedTags.includes(tag)) {
        selectedTags = selectedTags.filter((t) => t !== tag)
        console.log(selectedTags)
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
    const cards = document.querySelectorAll('.M_cardSearch')

    console.log(cards)

    cards.forEach((card) => {
      const tagsInCard = Array.from(card.querySelectorAll('.A_tagButton')).map(
        (p) => p.innerText
      )

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
})
