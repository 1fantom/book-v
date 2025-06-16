document.addEventListener('DOMContentLoaded', () => {
  fetch('header.html')
    .then(res => res.ok ? res.text() : Promise.reject('Fetch error'))
    .then(html => {
      document.getElementById('header-placeholder').innerHTML = html;
    })
    .catch(console.error);
});
