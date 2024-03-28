import cancelTest from '../images/tests/cancelTest.svg'
import imgHighScore from '../images/tests/imgHighScore.png'
import imgLowScore from '../images/tests/imgLowScore.png'
import imgMediumScore from '../images/tests/imgMediumScore.png'
import lineFinalTestLink from '../images/tests/lineFinalTest.svg'
import imgLineLink from '../images/tests/questionLine.svg'
import { testsList } from './testsList'

document.addEventListener('DOMContentLoaded', function () {
  const overlay = document.getElementById('overlay')
  const modal = document.getElementById('modal')
  const cards = document.querySelectorAll(
    '.M_middle2CardMain, .M_middleCardMainTests'
  )

  function populateModal(testId) {
    const test = testsList[testId]
    modal.innerHTML = ''
    modal.style.flexDirection = 'row'
    let currentQuestionIndex = 0
    let correctAnswersCount = 0

    function showCurrentQuestion() {
      const modal2 = document.getElementById('modal')
      const questionKeys = Object.keys(test).filter((k) => k.startsWith('q'))
      if (currentQuestionIndex >= questionKeys.length) {
        if (currentQuestionIndex >= questionKeys.length) {
          modal.innerHTML = ''

          const resultHeader = document.createElement('h1')
          resultHeader.textContent = `Ты знаешь мемы 10-х на...`
          resultHeader.className = 'A_resultHeader'
          modal.appendChild(resultHeader)

          const imgCancel = document.createElement('img')
          imgCancel.src = cancelTest
          imgCancel.className = 'A_cancelTest'
          imgCancel.alt = 'Изображение крестика'
          modal.appendChild(imgCancel)

          imgCancel.addEventListener('click', function () {
            overlay.style.display = 'none'
            modal.style.display = 'none'
          })

          const scoreText = document.createElement('p')
          scoreText.textContent = `${correctAnswersCount}/${questionKeys.length}
					`
          scoreText.className = 'A_scoreText'
          modal.appendChild(scoreText)

          const lineFinalTest = document.createElement('img')
          lineFinalTest.src = lineFinalTestLink
          lineFinalTest.className = 'A_lineFinalTestLine'
          lineFinalTest.alt = 'Изображение линии'
          modal.appendChild(lineFinalTest)

          let resultImageSrc
          const resultMessage = document.createElement('p')
          if (correctAnswersCount < 4) {
            resultMessage.textContent = 'Пожалуйста, подтяни мемологию!'
            resultImageSrc = imgLowScore
          } else if (correctAnswersCount < 6) {
            resultMessage.textContent = 'Ничоси, неплохой результат!'
            resultImageSrc = imgMediumScore
          } else {
            resultMessage.textContent = 'Ты профессор мемологии!'
            resultImageSrc = imgHighScore
          }
          resultMessage.className = 'A_resultMessage'
          modal.appendChild(resultMessage)

          const resultImage = document.createElement('img')
          resultImage.src = resultImageSrc
          resultImage.alt = 'Результат теста'
          resultImage.className = 'A_resultImage'
          modal.appendChild(resultImage)

          return
        }

        console.log('Тест завершен')
        return
      }
      const currentQuestion = test[questionKeys[currentQuestionIndex]]

      modal.innerHTML = ''

      modal2.style.display = 'flex'
      modal2.style.flexDirection = 'column'

      const questionTitle = document.createElement('div')
      questionTitle.className = 'A_QuestionTitle'
      const h1Question = document.createElement('h1')
      h1Question.className = 'A_h1Question'
      const h2Question = document.createElement('h2')
      h2Question.className = 'A_h2Question'
      h1Question.textContent = `${currentQuestionIndex + 1}/10`
      h2Question.textContent = `${currentQuestion.q}`
      questionTitle.appendChild(h1Question)
      questionTitle.appendChild(h2Question)
      modal.appendChild(questionTitle)

      const img = document.createElement('img')
      img.src = currentQuestion.pic
      img.className = 'A_imgQuestion'
      img.alt = 'Изображение вопроса'
      modal.appendChild(img)

      const imgCancel = document.createElement('img')
      imgCancel.src = cancelTest
      imgCancel.className = 'A_cancelTest'
      imgCancel.alt = 'Изображение крестика'
      modal.appendChild(imgCancel)

      imgCancel.addEventListener('click', function () {
        overlay.style.display = 'none'
        modal.style.display = 'none'
      })

      const imgLine = document.createElement('img')
      imgLine.src = imgLineLink
      imgLine.className = 'A_questionLine'
      imgLine.alt = 'Изображение линии'
      modal.appendChild(imgLine)

      const wrapperAnswers = document.createElement('div')
      wrapperAnswers.className = 'A_wrapperAnswers'
      modal.appendChild(wrapperAnswers)

      currentQuestion.a.forEach((answer, index) => {
        const answerBtn = document.createElement('button')
        answerBtn.textContent = answer
        answerBtn.addEventListener('click', () =>
          handleAnswer(answer, currentQuestion.ra)
        )
        answerBtn.className = 'A_answerBtn'
        wrapperAnswers.appendChild(answerBtn)
      })

      function handleAnswer(selectedAnswer, correctAnswer) {
        Array.from(wrapperAnswers.children).forEach((child, index) => {
          if (child.tagName === 'BUTTON') {
            child.disabled = true
            if (child.textContent === selectedAnswer) {
              if (child.textContent === correctAnswer) {
                correctAnswersCount++
              }
            }
            if (child.textContent === correctAnswer) {
              child.textContent += ' ✓'
            } else if (child.textContent === selectedAnswer) {
              child.textContent += ' ✗'
            }
          }
        })

        const nextQuestionBtn = document.createElement('button')
        nextQuestionBtn.textContent = 'Далее'
        nextQuestionBtn.addEventListener('click', () => {
          currentQuestionIndex++
          showCurrentQuestion()
        })
        nextQuestionBtn.className = 'A_nextQuestionBtn'
        modal.appendChild(nextQuestionBtn)
      }
    }

    const img = document.createElement('img')
    img.src = test.start.pic
    img.alt = 'Обложка теста'
    img.style.width = 'auto'
    img.style.height = '100%'
    modal.appendChild(img)

    const wrap1 = document.createElement('div')
    wrap1.style.display = 'flex'
    wrap1.style.flexDirection = 'column'
    modal.appendChild(wrap1)

    const header1 = document.createElement('h1')
    header1.textContent = test.start.header1
    header1.className = 'A_headerStartTest'
    wrap1.appendChild(header1)

    const header2 = document.createElement('h2')
    header2.textContent = test.start.header2
    header2.className = 'A_header2StartTest'
    wrap1.appendChild(header2)

    const startBtn = document.createElement('button')
    startBtn.textContent = 'Начать тест'
    startBtn.addEventListener('click', function () {
      showCurrentQuestion()
    })
    startBtn.className = 'A_buttonStartTest'
    wrap1.appendChild(startBtn)
  }

  function openModal(testId) {
    populateModal(testId)
    overlay.style.display = 'flex'
    modal.style.display = 'flex'
    document.body.style.overflow = 'hidden'
  }

  cards.forEach((card) => {
    card.addEventListener('click', function () {
      let testId = this.getAttribute('data-test-id')
      openModal(testId)
    })
  })

  overlay.addEventListener('click', function (event) {
    if (event.target === overlay) {
      overlay.style.display = 'none'
      modal.style.display = 'none'
      document.body.style.overflow = 'auto'
      document.body.style.overflowX = 'hidden'
    }
  })
})
