document.addEventListener("DOMContentLoaded", function () {
  let images = []; // Lista de imagens do projeto atual

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
  const closeBtn = overlay.querySelector(".close");
  const prevBtn = overlay.querySelector(".prev");
  const nextBtn = overlay.querySelector(".next");

  let currentIndex = 0;

  closeBtn.addEventListener("click", closeOverlay);
  prevBtn.addEventListener("click", prevImage);
  nextBtn.addEventListener("click", nextImage);
  document.addEventListener("keydown", handleKeyPress);

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
