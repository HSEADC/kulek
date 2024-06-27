/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};

document.addEventListener('DOMContentLoaded', function () {
  document.getElementById('A_searchInput').addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
      var query = event.target.value.trim();

      if (query) {
        window.location.href = "search.html?q=".concat(encodeURIComponent(query));
      }
    }
  });
});
/******/ })()
;