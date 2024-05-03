// Seleciona todos os links com a classe "scroll-link"
const scrollLinks = document.querySelectorAll('.scroll-link');

// Adiciona um ouvinte de eventos para cada link
scrollLinks.forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault(); // Impede o comportamento padrão do link
        const targetId = link.getAttribute('href').substring(1); // Remove o '#' do href
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            // Rola suavemente até o elemento de destino
            targetElement.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Adicione um evento de clique à imagem do logo
document.getElementById("logo-link").addEventListener("click", function(event) {
    event.preventDefault(); // Evita o comportamento padrão do link
    window.scrollTo({ top: 0, behavior: "smooth"  }); // Role suavemente de volta para o início
});