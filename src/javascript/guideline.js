const heightOfViewport = window.innerHeight
const fortyPercentOfViewport = heightOfViewport * 0.4

window.addEventListener('scroll', () => {
  const watchedElement1 = document.getElementById('A_nameGuideSection1')
  const watchedElement = document.getElementById('A_nameGuideSection2')
  const watchedElement2 = document.getElementById('A_nameGuideSection3')
  const watchedElement3 = document.getElementById('A_nameGuideSection4')
  const watchedElement4 = document.getElementById('A_nameGuideSection5')
  const watchedElement5 = document.getElementById('A_nameGuideSection6')
  const watchedElement6 = document.getElementById('A_nameGuideSection7')
  const colorChangedElement = document.getElementById('A_itemMenu1')
  const colorChangedElement2 = document.getElementById('A_itemMenu2')
  const colorChangedElement3 = document.getElementById('A_itemMenu3')
  const colorChangedElement4 = document.getElementById('A_itemMenu4')
  const colorChangedElement5 = document.getElementById('A_itemMenu5')
  const colorChangedElement6 = document.getElementById('A_itemMenu6')
  const colorChangedElement7 = document.getElementById('A_itemMenu7')
  const targetHeight = fortyPercentOfViewport

  const rect = watchedElement.getBoundingClientRect()
  const rect2 = watchedElement2.getBoundingClientRect()
  const rect3 = watchedElement1.getBoundingClientRect()
  const rect4 = watchedElement3.getBoundingClientRect()
  const rect5 = watchedElement4.getBoundingClientRect()
  const rect6 = watchedElement5.getBoundingClientRect()
  const rect7 = watchedElement6.getBoundingClientRect()

  if (rect3.top <= targetHeight) {
    colorChangedElement.classList.add('now')
  }
  if (rect.top <= targetHeight) {
    colorChangedElement2.classList.add('now')
    colorChangedElement.classList.remove('now')
  } else {
    colorChangedElement2.classList.remove('now')
  }
  if (rect2.top <= targetHeight) {
    colorChangedElement3.classList.add('now')
    colorChangedElement2.classList.remove('now')
  } else {
    colorChangedElement3.classList.remove('now')
  }
  if (rect4.top <= targetHeight) {
    colorChangedElement4.classList.add('now')
    colorChangedElement3.classList.remove('now')
  } else {
    colorChangedElement4.classList.remove('now')
  }
  if (rect5.top <= targetHeight) {
    colorChangedElement5.classList.add('now')
    colorChangedElement4.classList.remove('now')
  } else {
    colorChangedElement5.classList.remove('now')
  }
  if (rect6.top <= targetHeight) {
    colorChangedElement6.classList.add('now')
    colorChangedElement5.classList.remove('now')
  } else {
    colorChangedElement6.classList.remove('now')
  }
  if (rect7.top <= targetHeight) {
    colorChangedElement7.classList.add('now')
    colorChangedElement6.classList.remove('now')
  } else {
    colorChangedElement7.classList.remove('now')
  }
})
