import React from 'react'
import { createRoot } from 'react-dom/client'
import O_Footer from '../components/O_Footer/O_Footer.jsx'
import imgLogoP from '../images/teaser/letter.svg'
import imgLogoPW from '../images/teaser/letterW.svg'
import cancelTest from '../images/tests/cancelTest.svg'
import imgHighScore from '../images/tests/imgHighScore.png'
import imgLowScore from '../images/tests/imgLowScore.png'
import imgMediumScore from '../images/tests/imgMediumScore.png'
import lineFinalTestLink from '../images/tests/lineFinalTest.svg'
import lineFinalTestLinkMobile from '../images/tests/lineFinalTestLinkMobile.svg'
import imgLineLink from '../images/tests/questionLine.svg'
import imgLineLinkMobile from '../images/tests/questionLineMobile.svg'
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

    function renderFooter() {
      const footerContainer = document.createElement('div')
      footerContainer.style.marginTop = '15.278vw'
      modal.appendChild(footerContainer)
      const root = createRoot(footerContainer)
      root.render(<O_Footer />)
    }

    function showCurrentQuestion() {
      const modal2 = document.getElementById('modal')
      const questionKeys = Object.keys(test).filter((k) => k.startsWith('q'))
      if (currentQuestionIndex >= questionKeys.length) {
        modal.innerHTML = ''

        if (window.innerWidth <= 912) {
          const imgLogo = document.createElement('img')
          const linkLogo = document.createElement('a')
          linkLogo.href = '/'
          imgLogo.src = imgLogoP
          imgLogo.className = 'A_imgLink'
          imgLogo.alt = 'Изображение логотипа'
          linkLogo.appendChild(imgLogo)
          modal.appendChild(linkLogo)
        }

        const resultHeader = document.createElement('h1')
        resultHeader.textContent = test.end.low[0]
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
        if (window.innerWidth > 912) {
          lineFinalTest.src = lineFinalTestLink
        } else {
          lineFinalTest.src = lineFinalTestLinkMobile
        }
        lineFinalTest.className = 'A_lineFinalTestLine'
        lineFinalTest.alt = 'Изображение линии'
        modal.appendChild(lineFinalTest)

        let resultImageSrc
        const resultMessage = document.createElement('p')
        if (correctAnswersCount < 4) {
          resultMessage.textContent = test.end.low[1]
          resultImageSrc = imgLowScore
        } else if (correctAnswersCount < 6) {
          resultMessage.textContent = test.end.med[1]
          resultImageSrc = imgMediumScore
        } else {
          resultMessage.textContent = test.end.high[1]
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
      const currentQuestion = test[questionKeys[currentQuestionIndex]]

      modal.innerHTML = ''

      modal2.style.display = 'flex'
      modal2.style.flexDirection = 'column'

      if (window.innerWidth > 912) {
        const questionTitle = document.createElement('div')
        questionTitle.className = 'A_QuestionTitle'
        const h1Question = document.createElement('h1')
        h1Question.className = 'A_h1Question'
        const h2Question = document.createElement('h2')
        h1Question.textContent = `${currentQuestionIndex + 1}/10`
        h2Question.innerHTML = `${currentQuestion.q}`
        questionTitle.appendChild(h1Question)
        questionTitle.appendChild(h2Question)
        modal.appendChild(questionTitle)
      }
      if (window.innerWidth <= 912) {
        const imgLogo = document.createElement('img')
        const linkLogo = document.createElement('a')
        linkLogo.href = '/'
        imgLogo.src = imgLogoP
        imgLogo.className = 'A_imgLink'
        imgLogo.alt = 'Изображение логотипа'
        linkLogo.appendChild(imgLogo)
        modal.appendChild(linkLogo)
      }

      const img = document.createElement('img')
      img.src = currentQuestion.pic
      img.className = 'A_imgQuestion'
      img.alt = 'Изображение вопроса'
      modal.appendChild(img)

      if (window.innerWidth <= 912) {
        const questionTitle = document.createElement('div')
        questionTitle.className = 'A_QuestionTitle'
        const h1Question = document.createElement('h1')
        h1Question.className = 'A_h1Question'
        h1Question.innerHTML = `${currentQuestionIndex + 1}/10 ${
          currentQuestion.q
        }`
        questionTitle.appendChild(h1Question)
        modal.appendChild(questionTitle)
      }

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
      if (window.innerWidth > 912) {
        imgLine.src = imgLineLink
      } else {
        imgLine.src = imgLineLinkMobile
      }
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
            const isCorrectAnswer = child.textContent === correctAnswer
            const isSelectedAnswer = child.textContent === selectedAnswer

            const icon = document.createElement('span')
            icon.className = 'A_nameIconAccept'
            icon.innerHTML = isCorrectAnswer
              ? '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="15" viewBox="0 0 20 15" fill="none" class="A_nameIconAcceptRight"><path d="M0.998047 5.97853L7.99805 13.438L18.998 1.43799" stroke="black" stroke-width="2"/></svg>'
              : '<svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none"><path d="M1 0.999893L15.403 15.6461" stroke="black" stroke-width="2" stroke-linecap="round"/><path d="M15.9395 0.999893L1.53642 15.6461" stroke="black" stroke-width="2" stroke-linecap="round"/></svg>'
            child.appendChild(icon)

            const svgElement = icon.querySelector('svg')
            const pathElements = svgElement.querySelectorAll('path')

            if (!isSelectedAnswer) {
              child.addEventListener('mouseover', () => {
                pathElements.forEach((path) =>
                  path.setAttribute('stroke', 'white')
                )
              })
              child.addEventListener('mouseout', () => {
                pathElements.forEach((path) =>
                  path.setAttribute('stroke', 'black')
                )
              })
            }

            if (isSelectedAnswer) {
              if (child.textContent === correctAnswer) {
                correctAnswersCount++
              }
              child.style.backgroundColor = 'black'
              child.style.color = 'white'
              pathElements.forEach((path) =>
                path.setAttribute('stroke', 'white')
              )
            }
          }
        })

        const nextQuestionBtn = document.createElement('button')
        const nextQuestionBtnDiv = document.createElement('div')
        nextQuestionBtnDiv.className = 'A_innerDivButton'
        const nextQuestionBtnImg = document.createElement('div')
        const nextQuestionBtnH1 = document.createElement('h1')
        if (currentQuestionIndex === questionKeys.length - 1) {
          nextQuestionBtnH1.textContent = 'завершить'
        } else {
          nextQuestionBtnH1.textContent = 'далее'
          nextQuestionBtnImg.innerHTML =
            '<svg xmlns="http://www.w3.org/2000/svg" width="8" height="16" viewBox="0 0 8 16" fill="none"><path d="M1 1L7 8L1 15" stroke="black" stroke-width="1.5" stroke-linecap="round"/></svg>'
          nextQuestionBtnDiv.appendChild(nextQuestionBtnImg)
          const nextButtonSvgPath = nextQuestionBtnImg.querySelector('svg path')
          nextQuestionBtn.addEventListener('mouseover', () => {
            nextButtonSvgPath.setAttribute('stroke', 'white')
          })
          nextQuestionBtn.addEventListener('mouseout', () => {
            nextButtonSvgPath.setAttribute('stroke', 'black')
          })
        }
        nextQuestionBtnDiv.appendChild(nextQuestionBtnH1)
        nextQuestionBtn.appendChild(nextQuestionBtnDiv)
        nextQuestionBtn.addEventListener('click', () => {
          currentQuestionIndex++
          showCurrentQuestion()
        })
        nextQuestionBtn.className = 'A_nextQuestionBtn'
        modal.appendChild(nextQuestionBtn)

        if (window.innerWidth <= 912) {
          renderFooter()
        }
      }

      if (window.innerWidth <= 912) {
        renderFooter()
      }
    }

    const img = document.createElement('img')
    if (window.innerWidth > 912) {
      img.src = test.start.pic
    } else {
      img.src = test.start.picMobile
      const imgL = document.createElement('img')
      const LinkL = document.createElement('a')
      LinkL.href = '/'
      imgL.alt = 'Логотип'
      imgL.src = imgLogoPW
      imgL.className = 'A_headerLogo'
      LinkL.appendChild(imgL)
      modal.appendChild(LinkL)
    }
    img.alt = 'Обложка теста'
    img.style.width = 'auto'
    img.style.height = '100%'
    modal.appendChild(img)

    const wrap1 = document.createElement('div')
    wrap1.style.display = 'flex'
    wrap1.style.flexDirection = 'column'
    modal.appendChild(wrap1)

    const header1 = document.createElement('h1')
    header1.innerHTML = test.start.header1
    header1.className = 'A_headerStartTest'
    wrap1.appendChild(header1)

    const header2 = document.createElement('h2')
    header2.innerHTML = test.start.header2
    header2.className = 'A_header2StartTest'
    wrap1.appendChild(header2)

    const startBtn = document.createElement('button')
    startBtn.textContent = 'Начать тест'
    startBtn.addEventListener('click', function () {
      showCurrentQuestion()
      modal.scrollIntoView({ behavior: 'smooth' })
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
