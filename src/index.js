import './index.css'
document.addEventListener('DOMContentLoaded', function () {
  document
    .getElementById('A_searchInput')
    .addEventListener('keypress', function (event) {
      if (event.key === 'Enter') {
        const query = event.target.value.trim()
        if (query) {
          window.location.href = `search.html?q=${encodeURIComponent(query)}`
        }
      }
    })
})
