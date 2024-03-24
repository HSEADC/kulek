document.addEventListener('DOMContentLoaded', function () {
  const searchInput = document.querySelector('.W_inputTime input[type="text"]')

  searchInput.addEventListener('input', function () {
    const query = this.value.toLowerCase()
    const cards = document.querySelectorAll('.M_LongCardMain')

    cards.forEach((card) => {
      const title = card
        .querySelector('.A_title2MainPage')
        .innerText.toLowerCase()
      if (title.includes(query)) {
        card.closest('.M_LongCardMainLink').style.display = 'flex'
      } else {
        card.closest('.M_LongCardMainLink').style.display = 'none'
      }
    })
  })
})
