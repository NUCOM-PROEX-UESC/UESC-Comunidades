document.addEventListener("DOMContentLoaded", function () {
    // Função para mostrar o projeto específico com base no parâmetro da URL
    function mostrarProjeto() {
      // Obtém o parâmetro 'projeto' da URL
      const urlParams = new URLSearchParams(window.location.search);
      const projeto = urlParams.get("projeto");
  
      // Oculta todos os projetos
      const projetos = document.querySelectorAll(".corpo_projeto");
      projetos.forEach((projeto) => {
        projeto.style.display = "none";
      });
  
      // Mostra apenas o projeto específico
      const projetoEspecifico = document.querySelector(
        `.corpo_projeto.${projeto}`
      );
      if (projetoEspecifico) {
        projetoEspecifico.style.display = "block";
      } else {
        // Caso o projeto específico não seja encontrado, exibe uma mensagem de erro
        console.error("Projeto não encontrado:", projeto);
      }
    }
  
    // Chama a função mostrarProjeto após o carregamento completo da página
    mostrarProjeto();
  
    // Galeria de imagens
    const images = document.querySelectorAll(".image");
    const overlay = document.querySelector(".overlay");
    const overlayImage = overlay.querySelector("img");
    const closeBtn = overlay.querySelector(".close");
    const prevBtn = overlay.querySelector(".prev");
    const nextBtn = overlay.querySelector(".next");
    const thumbs = document.querySelectorAll(".thumb");
  
    let currentIndex = 0;
  
    images.forEach((image, index) => {
      image.addEventListener("click", () => {
        currentIndex = index;
        updateOverlayImage();
        overlay.classList.add("active");
        document.body.style.overflow = "hidden"; // Impede o scroll da página
      });
    });
  
    closeBtn.addEventListener("click", closeOverlay);
    prevBtn.addEventListener("click", prevImage);
    nextBtn.addEventListener("click", nextImage);
    document.addEventListener("keydown", handleKeyPress);
  
    thumbs.forEach((thumb, index) => {
      thumb.addEventListener("click", () => {
        currentIndex = index;
        updateOverlayImage();
      });
    });
  
    function closeOverlay() {
      overlay.classList.remove("active");
      document.body.style.overflow = ""; // Ativa o scroll da página
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
      thumbs.forEach((thumb, index) => {
        thumb.classList.toggle("selected", index === currentIndex);
      });
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
  });
  