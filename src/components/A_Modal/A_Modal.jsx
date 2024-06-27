import React, { useEffect, useState } from 'react'

const A_Modal = ({ onModalRef, onModalRef2, words }) => {
  const [showImageInDiv, setShowImageInDiv] = useState(false)
  const [initialImageSrc, setInitialImageSrc] = useState('')
  const [wordGenerated, setWordGenerated] = useState(false)
  const [selectedWord, setSelectedWord] = useState(null)
  const [styles, setStyles] = useState({})

  useEffect(() => {
    const initialImage = document.querySelector('.A_imageWordMain')
    if (initialImage) {
      setInitialImageSrc(initialImage.src)
    }
  }, [])

  const handleClick = () => {
    setShowImageInDiv(true)
    setWordGenerated(true)
    const word = words[0]
    setSelectedWord({
      ...word,
      tag: getTag(word.sub)
    })
  }

  const getTag = (sub) => {
    switch (sub) {
      case '20-е':
        return 'зумерский слэнг'
      case '10-е':
        return 'зумерский слэнг'
      case '90-е':
        return 'сленг 90-х'
      case '80-е':
        return 'сленг 80-х'
      case '70-е':
        return 'сленг 70-х'
      default:
        return 'сленг 60-х'
    }
  }

  const handleOverlayClick = (event) => {
    if (event.target.id === 'overlay') {
      setShowImageInDiv(false)
      setWordGenerated(false)
      setSelectedWord(null)
    }
  }

  const handleCloseClick = () => {
    setShowImageInDiv(false)
    setWordGenerated(false)
    setSelectedWord(null)
  }

  useEffect(() => {
    const cancelImage = document.querySelector('.A_Cancel')
    if (cancelImage) {
      cancelImage.addEventListener('click', handleCloseClick)
    }

    return () => {
      if (cancelImage) {
        cancelImage.removeEventListener('click', handleCloseClick)
      }
    }
  }, [])

  useEffect(() => {
    if (showImageInDiv) {
      const A_imageWordMain = document.querySelector('.A_imageWordMain3')
      if (A_imageWordMain) {
        A_imageWordMain.src = words[0]['img']
      }
    } else {
      const initialImage = document.querySelector('.A_imageWordMain')
      if (initialImage) {
        initialImage.src = initialImageSrc
      }
    }
  }, [showImageInDiv, initialImageSrc, words])

  const modalStyle = wordGenerated
    ? {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }
    : { display: 'flex' }
  const [header2Style, setHeader2Style] = useState({
    width: window.innerWidth > 912 ? '22.486vw' : '56.821vw'
  })

  const updateHeader2Style = () => {
    if (window.innerWidth > 912) {
      setHeader2Style((prevState) => ({
        ...prevState,
        width: '22.486vw'
      }))
    } else {
      setHeader2Style((prevState) => ({
        ...prevState,
        width: '56.821vw'
      }))
    }
  }

  useEffect(() => {
    updateHeader2Style()
    window.addEventListener('resize', updateHeader2Style)

    return () => {
      window.removeEventListener('resize', updateHeader2Style)
    }
  }, [])

  return (
    <div className="A_Overlay" id="overlay" onClick={handleOverlayClick}>
      <div
        className={`A_Modal ${styles.M_color}`}
        id="modal"
        ref={onModalRef}
        style={modalStyle}
      >
        {window.innerWidth > 912 ? (
          <img
            src="../../images/main/A_Cancel.svg"
            className="A_Cancel"
            alt="Close"
          />
        ) : (
          <img
            src="../../images/main/A_Cancel2.svg"
            className="A_Cancel"
            alt="Close"
          />
        )}
        {showImageInDiv ? (
          <div className="A_imageWordMain2" ref={onModalRef2}>
            <img
              src={initialImageSrc}
              alt="Обложка теста"
              className="A_imageWordMain3"
            />
          </div>
        ) : (
          <img
            src="../../images/main/A_imageWordMain.png"
            alt="Обложка теста"
            className="A_imageWordMain"
            ref={onModalRef2}
          />
        )}
        <div className="W_textsWord">
          {wordGenerated && selectedWord && (
            <h1
              className={`A_newHeader ${styles.A_nameCard}`}
              dangerouslySetInnerHTML={{ __html: selectedWord.tag }}
            />
          )}
          <h1
            className={`A_headerStartTest ${styles.A_nameCard}`}
            dangerouslySetInnerHTML={{
              __html:
                wordGenerated && selectedWord
                  ? selectedWord.word
                  : 'Сгенерируй слово сегодняшнего дня'
            }}
          />
          <h2
            className={`A_header2StartTest ${styles.A_descCard}`}
            style={header2Style}
            dangerouslySetInnerHTML={{
              __html:
                wordGenerated && selectedWord
                  ? selectedWord.bigDesc
                  : 'Сгенерируй слово дня и&nbsp;узнай больше о&nbsp;сленге разных поколений'
            }}
          />
          <button
            className={`A_buttonStartTest ${styles.A_ageTag}`}
            onClick={handleClick}
          >
            сгенерировать
          </button>
        </div>
      </div>
    </div>
  )
}

export default A_Modal
