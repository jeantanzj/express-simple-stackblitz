document.addEventListener('DOMContentLoaded', function (event) {
  fetch('/api/example')
    .then((e) => {
      return e.json();
    })
    .then((data) => {
      document.getElementById('app').innerHTML = JSON.stringify(data);
    });
});
