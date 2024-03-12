import cancelButton from '../images/dictionary/A_Cancel.svg'
import { words } from './words.js'

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[array[i], array[j]] = [array[j], array[i]]
  }
}

let wordsGrid = document.getElementsByClassName('C_Cards')[0]
let M_color = ''
let A_ageTag = ''
let A_ageTagText = ''
let A_nameCard = ''
let A_descCard = ''
let tag = ''

function addClickHandlers() {
  const overlay = document.getElementsByClassName('A_Overlay')[0]
  const textOverlay = document.getElementsByClassName('O_cradDescription')[0]
  document.querySelectorAll('.M_Card').forEach((card) => {
    card.removeEventListener('click', handleCardClick)
    card.addEventListener('click', handleCardClick)
  })

  function handleCardClick() {
    overlay.style.display = 'block'
    textOverlay.style.display = 'flex'
    document.body.style.overflow = 'hidden'
    const index = parseInt(this.getAttribute('data-index'), 10)
    const wordInfo = words[index]
    textOverlay.innerHTML = `<h2>${wordInfo.word}</h2><p>${wordInfo.bigDesc}</p>`
  }
}

function loadCards() {
  shuffleArray(words)

  words.forEach((card, index) => {
    if (card['sub'] === '20-е') {
      M_color = 'M_20'
      A_ageTag = 'A_ageTagBlack'
      A_ageTagText = 'A_ageTagTextBlack'
      A_nameCard = 'A_ageTagTextBlack'
      A_descCard = 'A_ageTagTextBlack'
      tag = 'зумерский слэнг'
    } else if (card['sub'] === '10-е') {
      M_color = 'M_10'
      A_ageTag = 'A_ageTagBlack'
      A_ageTagText = 'A_ageTagTextBlack'
      A_nameCard = 'A_ageTagTextBlack'
      A_descCard = 'A_ageTagTextBlack'
      tag = 'зумерский слэнг'
    } else if (card['sub'] === '90-е') {
      M_color = 'M_90'
      A_ageTag = 'A_ageTagBlack'
      A_ageTagText = 'A_ageTagTextBlack'
      A_nameCard = 'A_ageTagTextBlack'
      A_descCard = 'A_ageTagTextBlack'
      tag = 'сленг 90-х'
    } else if (card['sub'] === '80-е') {
      M_color = 'M_80'
      A_ageTag = 'A_ageTagWhite'
      A_ageTagText = 'A_ageTagTextWhite'
      A_nameCard = 'A_ageTagTextWhite'
      A_descCard = 'A_ageTagTextWhite'
      tag = 'сленг 80-х'
    } else if (card['sub'] === '70-е') {
      M_color = 'M_60'
      A_ageTag = 'A_ageTagWhite'
      A_ageTagText = 'A_ageTagTextWhite'
      A_nameCard = 'A_ageTagTextWhite'
      A_descCard = 'A_ageTagTextWhite'
      tag = 'сленг 70-х'
    } else {
      M_color = 'M_60'
      A_ageTag = 'A_ageTagWhite'
      A_ageTagText = 'A_ageTagTextWhite'
      A_nameCard = 'A_ageTagTextWhite'
      A_descCard = 'A_ageTagTextWhite'
      tag = 'сленг 60-х'
    }
    wordsGrid.innerHTML += `<div class="M_Card ${M_color}" data-index="${index}">
        <div class="W_ageTitle">
          <div class="A_ageTag ${A_ageTag}"><p class='A_ageTagText ${A_ageTagText}'>${card.sub}</p></div>  
          <h4 lang="ru" class='A_nameCard ${A_nameCard}'>${card.word}</h4>
        </div>
        <p class='A_descCard ${A_descCard}'>${card.desc}</p>
    </div>`
  })
}

document.addEventListener('DOMContentLoaded', function () {
  const rangeInput = document.getElementsByClassName('C_exectTime')[0]

  rangeInput.addEventListener('input', function () {
    const value = this.value
    let decade = ''

    switch (value) {
      case '1':
        decade = '60-е'
        break
      case '2':
        decade = '70-е'
        break
      case '3':
        decade = '80-е'
        break
      case '4':
        decade = '90-е'
        break
      case '5':
        decade = '00-е'
        break
      case '6':
        decade = '10-е'
        break
      case '7':
        decade = '20-е'
        break
    }

    wordsGrid.innerHTML = ''

    words
      .filter((card) => card.sub === decade)
      .forEach((card, index) => {
        if (card['sub'] === '20-е') {
          M_color = 'M_20'
          A_ageTag = 'A_ageTagBlack'
          A_ageTagText = 'A_ageTagTextBlack'
          A_nameCard = 'A_ageTagTextBlack'
          A_descCard = 'A_ageTagTextBlack'
          tag = 'зумерский слэнг'
        } else if (card['sub'] === '10-е') {
          M_color = 'M_10'
          A_ageTag = 'A_ageTagBlack'
          A_ageTagText = 'A_ageTagTextBlack'
          A_nameCard = 'A_ageTagTextBlack'
          A_descCard = 'A_ageTagTextBlack'
          tag = 'зумерский слэнг'
        } else if (card['sub'] === '90-е') {
          M_color = 'M_90'
          A_ageTag = 'A_ageTagBlack'
          A_ageTagText = 'A_ageTagTextBlack'
          A_nameCard = 'A_ageTagTextBlack'
          A_descCard = 'A_ageTagTextBlack'
          tag = 'сленг 90-х'
        } else if (card['sub'] === '80-е') {
          M_color = 'M_80'
          A_ageTag = 'A_ageTagWhite'
          A_ageTagText = 'A_ageTagTextWhite'
          A_nameCard = 'A_ageTagTextWhite'
          A_descCard = 'A_ageTagTextWhite'
          tag = 'сленг 80-х'
        } else if (card['sub'] === '70-е') {
          M_color = 'M_60'
          A_ageTag = 'A_ageTagWhite'
          A_ageTagText = 'A_ageTagTextWhite'
          A_nameCard = 'A_ageTagTextWhite'
          A_descCard = 'A_ageTagTextWhite'
          tag = 'сленг 70-х'
        } else {
          M_color = 'M_60'
          A_ageTag = 'A_ageTagWhite'
          A_ageTagText = 'A_ageTagTextWhite'
          A_nameCard = 'A_ageTagTextWhite'
          A_descCard = 'A_ageTagTextWhite'
          tag = 'сленг 60-х'
        }
        wordsGrid.innerHTML += `<div class="M_Card ${M_color}" data-index="${index}">
          <div class="W_ageTitle">
            <div class="A_ageTag ${A_ageTag}"><p class='A_ageTagText ${A_ageTagText}'>${card.sub}</p></div>  
            <h4 lang="ru" class='A_nameCard ${A_nameCard}'>${card.word}</h4>
          </div>
          <p class='A_descCard ${A_descCard}'>${card.desc}</p>
      </div>`
      })
    document.querySelectorAll('.M_Card').forEach((card) => {
      card.addEventListener('click', function () {
        overlay.style.display = 'block'
        textOverlay.style.display = 'flex'
        document.body.style.overflow = 'hidden'
        const index = parseInt(this.getAttribute('data-index'), 10)
        const wordInfo = words.filter((card) => card.sub === decade)[index]
        textOverlay.innerHTML = `<div class="A_imgCard"><img src=${wordInfo.img} alt="" /></div> <div class="M_mainPlot"><div class="C_headerName"><h3 class="A_tagCard">${tag}</h3><h2 class="A_cardTitle" lang="ru">${wordInfo.word}</h2></div><p class="A_Plot">${wordInfo.bigDesc}</p></div><img src="${cancelButton}" alt="" class="A_Cancel"/>`

        let cancel = document.getElementsByClassName('A_Cancel')[0]
        cancel.addEventListener('click', function () {
          overlay.style.display = 'none'
          textOverlay.style.display = 'none'
          document.body.style.overflow = 'auto'
          document.body.style.overflowX = 'hidden'
        })
      })
    })
  })

  const overlay = document.getElementsByClassName('A_Overlay')[0]
  const textOverlay = document.getElementsByClassName('O_cradDescription')[0]
  document.querySelectorAll('.M_Card').forEach((card) => {
    card.addEventListener('click', function () {
      overlay.style.display = 'block'
      textOverlay.style.display = 'flex'
      document.body.style.overflow = 'hidden'
      const index = parseInt(this.getAttribute('data-index'), 10)
      let tag2 =
        document.getElementsByClassName('A_ageTagText')[index].textContent
      if (tag2 === '20-е') {
        tag = 'зумерский слэнг'
      } else if (tag2 === '10-е') {
        tag = 'зумерский слэнг'
      } else if (tag2 === '90-е') {
        tag = 'сленг 90-х'
      } else if (tag2 === '80-е') {
        tag = 'сленг 80-х'
      } else if (tag2 === '70-е') {
        tag = 'сленг 70-х'
      } else {
        tag = 'сленг 60-х'
      }
      const wordInfo = words[index]
      textOverlay.innerHTML = `<div class="A_imgCard"><img src=${wordInfo.img} alt="" /></div> <div class="M_mainPlot"><div class="C_headerName"><h3 class="A_tagCard">${tag}</h3><h2 class="A_cardTitle" lang="ru">${wordInfo.word}</h2></div><p class="A_Plot">${wordInfo.bigDesc}</p></div><img src='${cancelButton}' alt="" class="A_Cancel"/>`

      let cancel = document.getElementsByClassName('A_Cancel')[0]
      cancel.addEventListener('click', function () {
        overlay.style.display = 'none'
        textOverlay.style.display = 'none'
        document.body.style.overflow = 'auto'
        document.body.style.overflowX = 'hidden'
      })
    })
  })

  overlay.addEventListener('click', function () {
    this.style.display = 'none'
    textOverlay.style.display = 'none'
    document.body.style.overflow = 'auto'
    document.body.style.overflowX = 'hidden'
  })

  function searchWord() {
    const input = document
      .getElementsByClassName('A_inputTrue')[0]
      .value.toLowerCase()
    const resultsContainer = document.getElementsByClassName('C_Cards')[0]

    resultsContainer.innerHTML = ''

    const filteredWords = words.filter((word) =>
      word.word.toLowerCase().includes(input)
    )

    filteredWords.forEach((card) => {
      resultsContainer.innerHTML += `<div class="M_Card ${M_color}" data-index="${index}">
      <div class="W_ageTitle">
        <div class="A_ageTag ${A_ageTag}"><p class='A_ageTagText ${A_ageTagText}'>${card.sub}</p></div>  
        <h4 lang="ru" class='A_nameCard ${A_nameCard}'>${card.word}</h4>
      </div>
      <p class='A_descCard ${A_descCard}'>${card.desc}</p>
  </div>`
    })

    // if (filteredWords.length === 0) {
    //   resultsContainer.innerHTML = '<p>Слово не найдено</p>'
    // }
  }
})

document.onload = loadCards()
