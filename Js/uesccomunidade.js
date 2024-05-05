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
  
    //galeria
    const images = document.querySelectorAll(".image");
    const overlay = document.querySelector(".overlay");
    const overlayImage = overlay.querySelector("img");
    const closeBtn = overlay.querySelector(".close");
    const prevBtn = overlay.querySelector(".prev");
    const nextBtn = overlay.querySelector(".next");
    let currentIndex = 0;
  
    images.forEach((image, index) => {
      image.addEventListener("click", () => {
        currentIndex = index;
        overlayImage.src = image.querySelector("img").src;
        overlay.classList.add("active");
        document.body.style.overflow = "hidden"; // Impede o scroll da página
      });
    });
  
    closeBtn.addEventListener("click", () => {
      overlay.classList.remove("active");
      document.body.style.overflow = ""; // Ativa o scroll da página
    });
  
    prevBtn.addEventListener("click", () => {
      currentIndex = (currentIndex - 1 + images.length) % images.length;
      overlayImage.src = images[currentIndex].querySelector("img").src;
    });
  
    nextBtn.addEventListener("click", () => {
      currentIndex = (currentIndex + 1) % images.length;
      overlayImage.src = images[currentIndex].querySelector("img").src;
    });
  });
  