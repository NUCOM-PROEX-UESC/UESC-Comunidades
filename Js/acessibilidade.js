//incorporando o menu de acessibilidade na página
document.addEventListener('DOMContentLoaded', function () {
    var container = document.getElementById('acessibilidade_menu');
    if (container) {
        fetch('acessibilidade_menu.html')
            .then(response => response.text())
            .then(html => {
                container.innerHTML = html;
            })
            .catch(error => console.error('Erro ao carregar o menu de acessibilidade:', error));
    }
});

// Função para ajustar o tamanho da fonte
function adjustFontSize(action) {
    document.querySelectorAll('*').forEach(function(element) {
      const computedStyle = window.getComputedStyle(element);
      const currentFontSize = parseFloat(computedStyle.fontSize);
      if (action === 'increase') {
        element.style.fontSize = (currentFontSize + 0.5) + 'px';
      } else if (action === 'decrease') {
        element.style.fontSize = (currentFontSize - 0.5) + 'px';
      } else if (action === 'reset') {
        element.style.fontSize = ''; // Reseta para o tamanho original
      }
    });
  }

  let underlineActive = false;

  // Função para sublinhar links
  function underlineLinks() {
    document.querySelectorAll('a').forEach(function(link) {
      if (underlineActive) {
        link.style.textDecoration = '';
        link.style.textDecorationColor = ''; // Reseta a cor do sublinhado
        link.style.textDecorationThickness = ''; // Reseta a espessura do sublinhado
      } else {
        link.style.textDecoration = 'underline';
        link.style.textDecorationColor = '#0000FF'; // Cor azul
        link.style.textDecorationThickness = '2px'; // Espessura 2px
      }
    });
    underlineActive = !underlineActive; // Alterna o estado
  }

  // Variável de estado para rastrear o status da escala de cinza
  let grayscaleActive = false;

  // Função para ativar/desativar escala de cinza
  function toggleGrayscale() {
    const elements = document.querySelectorAll('.grayscale');
    elements.forEach(element => {
      if (grayscaleActive) {
       element.style.filter = 'grayscale(0%)';
      } else {
        element.style.filter = 'grayscale(100%)';
      }
    });
    grayscaleActive = !grayscaleActive; // Alterna o estado
  }

  // Eventos para aumentar e diminuir o texto
  document.querySelector('[data-action="resize-plus"]').addEventListener('click', function(event) {
    event.preventDefault();
    adjustFontSize('increase');
  });

  document.querySelector('[data-action="resize-minus"]').addEventListener('click', function(event) {
    event.preventDefault();
    adjustFontSize('decrease');
  });

  let highContrastActive = false;

// Função para ativar/desativar alto contraste
function toggleHighContrast() {
const body = document.body;
if (highContrastActive) {
body.classList.remove('high-contrast');
} else {
body.classList.add('high-contrast');
}
highContrastActive = !highContrastActive; // Alterna o estado
}

// Variável para rastrear o estado da fonte legível
let readableFontActive = false;

// Função para alternar a fonte legível
function toggleReadableFont() {
const body = document.body;
if (readableFontActive) {
// Resetar para a fonte padrão
body.style.fontFamily = '';
} else {
// Alterar para uma fonte mais legível, e.g., Arial ou Open Dyslexic
body.style.fontFamily = 'OpenDyslexic, Arial, sans-serif';
}
readableFontActive = !readableFontActive; // Alterna o estado
}

// Função para resetar todas as funcionalidades
function resetAll() {
adjustFontSize('reset');
document.querySelectorAll('a').forEach(function(link) {
link.style.textDecoration = '';
link.style.textDecorationColor = ''; // Reseta a cor do sublinhado
link.style.textDecorationThickness = ''; // Reseta a espessura do sublinhado
});
const body = document.body;
body.classList.remove('grayscale'); // Reseta a escala de cinza
body.classList.remove('high-contrast'); // Reseta o alto contraste
underlineActive = false;
grayscaleActive = false;
highContrastActive = false;
readableFontActive = false;
}

// Evento para alto contraste
document.querySelector('[data-action="high-contrast"]').addEventListener('click', function(event) {
event.preventDefault();
toggleHighContrast();
});

  // Evento para sublinhar links
  document.querySelector('[data-action="links-underline"]').addEventListener('click', function(event) {
    event.preventDefault();
    underlineLinks('underline');
  });

  // Evento para escala de cinza
  document.querySelector('[data-action="grayscale"]').addEventListener('click', function(event) {
    event.preventDefault();
    toggleGrayscale();
  });

  // Evento para resetar tudo
  document.querySelector('[data-action="reset"]').addEventListener('click', function(event) {
    event.preventDefault();
    resetAll();
  });

  // Evento para ativar/desativar a fonte legível
document.querySelector('[data-action="readable-font"]').addEventListener('click', function(event) {
event.preventDefault();
toggleReadableFont();
});

  // Toggle toolbar
  document.querySelector('.pojo-a11y-toolbar-toggle a').addEventListener('click', function(event) {
    event.preventDefault();
    document.getElementById('pojo-a11y-toolbar').classList.toggle('active');
  });