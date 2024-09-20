window.onload = function() {
  ocultarElementosPorID();
  document.body.style.display = 'block'; // Mostra o corpo da página
};

function ocultarElementosPorID() {
  var urlParams = new URLSearchParams(window.location.search);
  var id = urlParams.get("id"); // Busca o parâmetro "id" na URL
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

document.addEventListener("DOMContentLoaded", function () {
  document.body.style.display = "none";
});

// Função para copiar o link para a área de transferência
function copyToClipboard(text) {
  const textarea = document.createElement("textarea");
  textarea.value = text;
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand("copy");
  document.body.removeChild(textarea);
  alert("Link copiado para a área de transferência!");
}

// Função para adicionar a seção de compartilhamento
function addShareSection(news) {
  const shareSecs = document.querySelectorAll('.share-sec');
  if (shareSecs.length === 0) return;

  const newsLink = window.location.href;
  const shareHTML = `
    <a href="https://www.instagram.com/proex_uesc/" target="_blank" class="share-btn"><i class="fab fa-instagram fa-xs" style="padding-top: 10px;"></i></a>
    <a href="https://twitter.com/intent/tweet?url=${encodeURIComponent(newsLink)}&text=${encodeURIComponent(news.title)}" target="_blank" class="share-btn"><i class="fab fa-twitter fa-xs" style="padding-top: 10px;"></i></a>
    <a href="https://api.whatsapp.com/send?text=${encodeURIComponent(news.title)} ${encodeURIComponent(newsLink)}" target="_blank" class="share-btn"><i class="fab fa-whatsapp fa-xs" style="padding-top: 10px;"></i></a>
    <a href="https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(newsLink)}" target="_blank" class="share-btn"><i class="fab fa-facebook fa-xs" style="padding-top: 10px;"></i></a>
    <a href="#" onclick="copyToClipboard('${newsLink}'); return false;" class="share-btn"><i class="fa fa-clone fa-xs" style="padding-top: 10px;"></i></a>
  `;

  shareSecs.forEach(shareSec => {
    shareSec.innerHTML = shareHTML;
  });
}

// Chame a função quando a página estiver carregada
document.addEventListener("DOMContentLoaded", function () {
  const news = {
    title: document.querySelector('.text-proex h3').innerText
  };
  addShareSection(news);
});
