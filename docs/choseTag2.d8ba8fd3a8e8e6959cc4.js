/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
document.addEventListener('DOMContentLoaded', function () {
  var tagButtons = document.querySelectorAll('.W_allTagsTests .A_subTagNewMain');
  var selectedTags = [];
  tagButtons.forEach(function (button) {
    button.addEventListener('click', function () {
      var tag = this.innerText.replace('#', '');

      if (selectedTags.includes(tag)) {
        selectedTags = selectedTags.filter(function (t) {
          return t !== tag;
        });
        this.style.color = '#888888';
        this.style.border = '0.104vw solid #888888';
      } else {
        selectedTags.push(tag);
        this.style.color = '#000';
        this.style.border = '0.104vw solid #000';
      }

      filterCards();
    });
  });

  function filterCards() {
    var cards = document.querySelectorAll('.M_middle2CardMain, .M_middleCardMainTests');
    cards.forEach(function (card) {
      var tagsInCard = Array.from(card.querySelectorAll('.C_subTagsMain .A_subTagNewMain p')).map(function (p) {
        return p.innerText.replace('#', '');
      });

      if (selectedTags.length === 0 || selectedTags.some(function (tag) {
        return tagsInCard.includes(tag);
      })) {
        card.style.display = 'flex';
      } else {
        card.style.display = 'none';
      }
    });
  }

  function filterTestsByTitle(query) {
    var cards = document.querySelectorAll('.M_middle2CardMain, .M_middleCardMainTests');
    var lowerCaseQuery = query.toLowerCase();
    cards.forEach(function (card) {
      var title = card.querySelector('h2').textContent.toLowerCase();

      if (title.includes(lowerCaseQuery)) {
        card.style.display = 'flex';
      } else {
        card.style.display = 'none';
      }
    });
  }

  var searchInput = document.querySelector('.A_Input input');
  searchInput.addEventListener('input', function () {
    filterTestsByTitle(this.value);
  });
});
/******/ })()
;