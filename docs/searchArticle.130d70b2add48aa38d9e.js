/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
document.addEventListener('DOMContentLoaded', function () {
  var searchInput = document.querySelector('.W_inputTime input[type="text"]');
  searchInput.addEventListener('input', function () {
    var query = this.value.toLowerCase();
    var cards = document.querySelectorAll('.M_LongCardMain');
    cards.forEach(function (card) {
      var title = card.querySelector('.A_title2MainPage').innerText.toLowerCase();

      if (title.includes(query)) {
        card.closest('.M_LongCardMainLink').style.display = 'flex';
      } else {
        card.closest('.M_LongCardMainLink').style.display = 'none';
      }
    });
  });
});
/******/ })()
;