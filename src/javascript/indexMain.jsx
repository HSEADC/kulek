import React from 'react'
import { createRoot } from 'react-dom/client'
import A_Modal from '../components/A_Modal/A_Modal.jsx'
import { words } from './words.js'

document.addEventListener('DOMContentLoaded', function () {
  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1))
      ;[array[i], array[j]] = [array[j], array[i]]
    }
  }

  let handleModalRef2

  const follow = document.getElementById('A_buttonFollowMain')

  follow.addEventListener('click', function () {
    const existingModalContainer = document.getElementById('modal-container')
    if (existingModalContainer) {
      const existingModal = document.getElementById('modal')
      const existingOverlay = document.getElementById('overlay')
      if (existingModal && existingOverlay) {
        existingModal.style.display = 'flex'
        existingOverlay.style.display = 'flex'
      }
      return
    }

    const modalContainer = document.createElement('div')
    modalContainer.id = 'modal-container'

    document.body.appendChild(modalContainer)

    const originalState = {
      headerText: '',
      header2Text: '',
      buttonText: '',
      buttonVisible: true,
      headerStyle: '',
      header2Style: '',
      buttonStyle: ''
    }

    const handleModalRef = (element) => {
      if (element) {
        element.style.display = 'flex'

        const overlay = document.getElementById('overlay')
        if (overlay) {
          overlay.style.display = 'flex'

          const A_buttonStartTest =
            document.getElementsByClassName('A_buttonStartTest')[0]
          const A_headerStartTest =
            document.getElementsByClassName('A_headerStartTest')[0]
          const A_header2StartTest =
            document.getElementsByClassName('A_header2StartTest')[0]

          handleModalRef2 = (element) => {
            if (element) {
            }
          }

          if (originalState.headerText === '') {
            originalState.headerText = A_headerStartTest.innerHTML
            originalState.header2Text = A_header2StartTest.innerHTML
            originalState.buttonText = A_buttonStartTest.innerText
            originalState.headerStyle = A_headerStartTest.style.cssText
            originalState.header2Style = A_header2StartTest.style.cssText
            originalState.buttonStyle = A_buttonStartTest.style.cssText
          }

          A_buttonStartTest.addEventListener('click', function () {
            shuffleArray(words)

            A_buttonStartTest.style.display = 'none'

            A_headerStartTest.innerText = words[0]['word']
            if (window.innerWidth > 912) {
              A_headerStartTest.style.fontSize = '5.556vw'
            } else {
              A_headerStartTest.style.fontSize = '15.556vw'
            }
            A_headerStartTest.style.marginTop = '0.717vw'
            A_headerStartTest.style.marginLeft = '3.702vw'
            A_headerStartTest.style.marginBottom = '2.627vw'

            A_header2StartTest.innerHTML = words[0]['bigDesc']
            A_header2StartTest.style.marginLeft = '3.702vw'

            const A_imageWordMain = document.querySelector('.A_imageWordMain')
            if (A_imageWordMain) {
              A_imageWordMain.src = words[0]['img']
            } else {
              console.error('Element with class A_imageWordMain not found')
            }
          })

          overlay.addEventListener('click', function (event) {
            if (event.target === overlay) {
              element.style.display = 'none'
              overlay.style.display = 'none'
              A_buttonStartTest.style.display = 'block'

              A_headerStartTest.innerText = originalState.headerText
              A_headerStartTest.style.cssText = originalState.headerStyle
              A_header2StartTest.innerHTML = originalState.header2Text
              A_header2StartTest.style.cssText = originalState.header2Style
              A_buttonStartTest.innerText = originalState.buttonText
              A_buttonStartTest.style.cssText = originalState.buttonStyle

              const A_imageWordMain = document.querySelector('.A_imageWordMain')
              if (A_imageWordMain) {
                A_imageWordMain.src = '../../images/main/A_imageWordMain.png'
              }
            }
          })

          const cancelImage = document.querySelector('.A_Cancel')
          if (cancelImage) {
            cancelImage.addEventListener('click', function () {
              element.style.display = 'none'
              overlay.style.display = 'none'
              A_buttonStartTest.style.display = 'block'

              A_headerStartTest.innerText = originalState.headerText
              A_headerStartTest.style.cssText = originalState.headerStyle
              A_header2StartTest.innerHTML = originalState.header2Text
              A_header2StartTest.style.cssText = originalState.header2Style
              A_buttonStartTest.innerText = originalState.buttonText
              A_buttonStartTest.style.cssText = originalState.buttonStyle

              const A_imageWordMain = document.querySelector('.A_imageWordMain')
              if (A_imageWordMain) {
                A_imageWordMain.src = '../../images/main/A_imageWordMain.png'
              }
            })
          }
        }
      }
    }

    const root = createRoot(modalContainer)
    root.render(
      <A_Modal
        onModalRef={handleModalRef}
        onModalRef2={handleModalRef2}
        words={words}
      />
    )
  })
})
