/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
var heightOfViewport = window.innerHeight;
var fortyPercentOfViewport = heightOfViewport * 0.4;
window.addEventListener('scroll', function () {
  var watchedElement1 = document.getElementById('A_nameGuideSection1');
  var watchedElement = document.getElementById('A_nameGuideSection2');
  var watchedElement2 = document.getElementById('A_nameGuideSection3');
  var watchedElement3 = document.getElementById('A_nameGuideSection4');
  var watchedElement4 = document.getElementById('A_nameGuideSection5');
  var watchedElement5 = document.getElementById('A_nameGuideSection6');
  var watchedElement6 = document.getElementById('A_nameGuideSection7');
  var colorChangedElement = document.getElementById('A_itemMenu1');
  var colorChangedElement2 = document.getElementById('A_itemMenu2');
  var colorChangedElement3 = document.getElementById('A_itemMenu3');
  var colorChangedElement4 = document.getElementById('A_itemMenu4');
  var colorChangedElement5 = document.getElementById('A_itemMenu5');
  var colorChangedElement6 = document.getElementById('A_itemMenu6');
  var colorChangedElement7 = document.getElementById('A_itemMenu7');
  var targetHeight = fortyPercentOfViewport;
  var rect = watchedElement.getBoundingClientRect();
  var rect2 = watchedElement2.getBoundingClientRect();
  var rect3 = watchedElement1.getBoundingClientRect();
  var rect4 = watchedElement3.getBoundingClientRect();
  var rect5 = watchedElement4.getBoundingClientRect();
  var rect6 = watchedElement5.getBoundingClientRect();
  var rect7 = watchedElement6.getBoundingClientRect();

  if (rect3.top <= targetHeight) {
    colorChangedElement.classList.add('now');
  }

  if (rect.top <= targetHeight) {
    colorChangedElement2.classList.add('now');
    colorChangedElement.classList.remove('now');
  } else {
    colorChangedElement2.classList.remove('now');
  }

  if (rect2.top <= targetHeight) {
    colorChangedElement3.classList.add('now');
    colorChangedElement2.classList.remove('now');
  } else {
    colorChangedElement3.classList.remove('now');
  }

  if (rect4.top <= targetHeight) {
    colorChangedElement4.classList.add('now');
    colorChangedElement3.classList.remove('now');
  } else {
    colorChangedElement4.classList.remove('now');
  }

  if (rect5.top <= targetHeight) {
    colorChangedElement5.classList.add('now');
    colorChangedElement4.classList.remove('now');
  } else {
    colorChangedElement5.classList.remove('now');
  }

  if (rect6.top <= targetHeight) {
    colorChangedElement6.classList.add('now');
    colorChangedElement5.classList.remove('now');
  } else {
    colorChangedElement6.classList.remove('now');
  }

  if (rect7.top <= targetHeight) {
    colorChangedElement7.classList.add('now');
    colorChangedElement6.classList.remove('now');
  } else {
    colorChangedElement7.classList.remove('now');
  }
});
/******/ })()
;