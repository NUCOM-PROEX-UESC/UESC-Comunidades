document.addEventListener("DOMContentLoaded", function () {
  let images = []; // Lista de imagens do projeto atual
  let altOverlay = null; // Variável para armazenar a legenda
  let startX = 0; // Coordenada inicial do toque

  // Função para mostrar o projeto específico com base no parâmetro da URL
  function mostrarProjeto() {
    // Obtém o parâmetro 'projeto' da URL
    const urlParams = new URLSearchParams(window.location.search);
    const projeto = urlParams.get("projeto");

    // Oculta todos os projetos
    const projetos = document.querySelectorAll(".corpo_projeto");
    projetos.forEach((projetoElement) => {
      projetoElement.style.display = "none";
    });

    // Mostra apenas o projeto específico
    const projetoEspecifico = document.querySelector(`.corpo_projeto.${projeto}`);
    if (projetoEspecifico) {
      projetoEspecifico.style.display = "block";

      // Atualiza os eventos de clique para as imagens da galeria
      const gallery = projetoEspecifico.querySelector(".gallery");
      if (gallery) {
        images = Array.from(gallery.querySelectorAll(".image"));
        images.forEach((image, index) => {
          image.addEventListener("click", () => {
            currentIndex = index;
            updateOverlayImage();
            overlay.classList.add("active");
            document.body.style.overflow = "hidden"; // Impede o scroll da página
          });
        });
      }
    } else {
      // Caso o projeto específico não seja encontrado, exibe uma mensagem de erro
      console.error("Projeto não encontrado:", projeto);
    }
  }

  // Chama a função mostrarProjeto após o carregamento completo da página
  mostrarProjeto();

  // Galeria de imagens
  const overlay = document.querySelector(".overlay");
  const overlayImage = overlay.querySelector("img");

  // Criar botões de navegação dinamicamente
  const closeBtn = document.createElement("button");
  closeBtn.classList.add("close");
  closeBtn.textContent = "X";
  overlay.appendChild(closeBtn);

  const prevBtn = document.createElement("button");
  prevBtn.classList.add("prev");
  prevBtn.textContent = "<";
  overlay.appendChild(prevBtn);

  const nextBtn = document.createElement("button");
  nextBtn.classList.add("next");
  nextBtn.textContent = ">";
  overlay.appendChild(nextBtn);

  let currentIndex = 0;

  closeBtn.addEventListener("click", closeOverlay);
  prevBtn.addEventListener("click", prevImage);
  nextBtn.addEventListener("click", nextImage);
  document.addEventListener("keydown", handleKeyPress);

  // Adiciona eventos de touch
  overlay.addEventListener("touchstart", handleTouchStart);
  overlay.addEventListener("touchmove", handleTouchMove);

  function closeOverlay() {
    overlay.classList.remove("active");
    document.body.style.overflow = ""; // Ativa o scroll da página
    // Remove a legenda ao fechar o overlay
    if (altOverlay) {
      altOverlay.remove();
      altOverlay = null;
    }
  }

  function prevImage() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateOverlayImage();
  }

  function nextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    updateOverlayImage();
  }

  function updateOverlayImage() {
    overlayImage.src = images[currentIndex].querySelector("img").src;
    // Remove a legenda anterior, se existir
    if (altOverlay) {
      altOverlay.remove();
      altOverlay = null;
    }
    // Exibe a legenda para a imagem atual
    const altText = images[currentIndex].querySelector("img").getAttribute("alt");
    if (altText) {
      altOverlay = document.createElement("div");
      altOverlay.classList.add("alt-overlay");
      altOverlay.textContent = altText;
      altOverlay.style.color = "white"; // Define a cor do texto como branco
      altOverlay.style.position = "absolute"; // Define a posição absoluta
      altOverlay.style.bottom = "0.5rem"; // Define a distância do fundo da imagem
      altOverlay.style.left = "0"; // Alinha a legenda à esquerda
      altOverlay.style.width = "100%"; // Define a largura como 100% para cobrir toda a largura da imagem
      altOverlay.style.textAlign = "center"; // Centraliza o texto horizontalmente
      overlay.appendChild(altOverlay);
    }
  }

  function handleKeyPress(event) {
    if (event.key === "ArrowLeft") {
      prevImage();
    } else if (event.key === "ArrowRight") {
      nextImage();
    } else if (event.key === "Escape") {
      closeOverlay();
    }
  }

  // Funções para o touch
  function handleTouchStart(event) {
    startX = event.touches[0].clientX;
  }

  function handleTouchMove(event) {
    if (!startX) return;

    const currentX = event.touches[0].clientX;
    const diffX = startX - currentX;

    if (Math.abs(diffX) > 50) {
      if (diffX > 0) {
        nextImage();
      } else {
        prevImage();
      }
      startX = 0; // Resetar o valor inicial para evitar múltiplos swipes
    }
  }

  // Ajustes de CSS para setas em dispositivos móveis
  const style = document.createElement('style');
  style.innerHTML = `
    @media screen and (max-width: 768px) {
      .prev,
      .next {
        top: auto;
        bottom: 20px;
        transform: translateY(0);
      }

      .prev {
        left: 10px;
      }

      .next {
        right: 10px;
      }
    }
  `;
  document.head.appendChild(style);
});
