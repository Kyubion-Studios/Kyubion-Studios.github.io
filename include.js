function includeHTML() {
  var includeElements = document.querySelectorAll('[include-html]');

  includeElements.forEach(function(element) {
      var filePath = element.getAttribute('include-html');

      if (filePath) {
          fetch(filePath)
          .then(response => response.text())
          .then(html => {
              element.innerHTML = html;
          })
          .catch(error => {
              console.error('Failed to load file: ' + filePath, error);
          });
      }
  });
}

document.addEventListener('DOMContentLoaded', includeHTML);