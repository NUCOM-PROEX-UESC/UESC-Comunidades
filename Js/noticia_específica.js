window.onload = function() {
  ocultarElementosPorID();
  document.body.style.display = 'block'; // Mostra o corpo da página
};

function ocultarElementosPorID() {
  var url = window.location.href;
  var id = url.substring(url.lastIndexOf("#") + 1);
  var section = document.getElementById("newsSection");
  var elementos = section.getElementsByTagName("*");
  for (var i = 0; i < elementos.length; i++) {
      var elemento = elementos[i];
      if (elemento.id !== id && !elemento.contains(document.getElementById(id))) {
          elemento.style.display = "none";
      }
  }
  var elementoEspecifico = document.getElementById(id);
  if (elementoEspecifico) {
      elementoEspecifico.style.display = "block";
      var filhos = elementoEspecifico.getElementsByTagName("*");
      for (var j = 0; j < filhos.length; j++) {
          filhos[j].style.display = "block";
      }
      // Adiciona ajuste na rolagem para posicionar acima do elemento específico
      var offset = -200; // Ajuste de 200 pixels acima do elemento, pode ajustar conforme necessário
      var elementPosition = elementoEspecifico.getBoundingClientRect().top + window.pageYOffset + offset;
      window.scrollTo({ top: elementPosition, behavior: 'smooth' });
  }
}