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
              console.error('Erro ao carregar o arquivo: ' + filePath, error);
          });
      }
  });
}

// Chamar a função de inclusão ao carregar a página
document.addEventListener('DOMContentLoaded', includeHTML);
