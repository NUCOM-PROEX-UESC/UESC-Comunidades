window.addEventListener('scroll', function() {
    var header = document.querySelector('header');
    var divisoriacontainer = document.getElementById('divisoria_container'); // Adicione um ID apropriado para a seção de conteúdo
    var container_inicial = document.getElementById('container_inicial');
    var logo_bahiatecsolar = document.getElementById('logo_bahiatecsolar');
    var scrollPosition = window.scrollY;

    if (scrollPosition > 200) { // Altere a altura desejada em que o menu se tornará fixo
        header.classList.add('fixed');
         //Remove o div com id "logo_header"
        /*var logoHeader = document.getElementById('logo_header');
        if (logoHeader) {
            logoHeader.remove();
        }*/

        if (divisoriacontainer) {
            divisoriacontainer.style.position = 'fixed';
            divisoriacontainer.style.marginTop = '4.3rem'; // Igual à altura do header
        }
        if (container_inicial) {
            container_inicial.style.marginTop = '17rem'; // Igual à altura do header
        }

        if (logo_bahiatecsolar) {
            logo_bahiatecsolar.style.marginbottom = '1rem';
            logo_bahiatecsolar.style.height = '2rem'; // Igual à altura do header
            logo_bahiatecsolar.style.width = '10rem'; // Igual à altura do header

            logo_bahiatecsolar.src = './img_Semex/ICON-MENU-SEMANA-BAIANA-DE-EXTENSÃO-E-CULTURA.png';
        }
        
    } else {
        header.classList.remove('fixed');
        // Verifica se o div com id "logo_header" já foi removido anteriormente
        /*if (!document.getElementById('logo_header')) {
            // Se não existe, você pode adicionar de volta como o primeiro elemento
            var logoHeader = document.createElement('div');
            logoHeader.id = 'logo_header';
            // Aqui você pode recriar a estrutura do seu logotipo
            logoHeader.innerHTML = `
                <a href="#" class="logo_link">
                    <img id="logo_bahiatecsolar" src="/img/LOGO-SEMANA-BAIANA-DE-EXTENSÃO-E-CULTURA.png" alt="">
                </a>
            `;
            // Adicione como o primeiro elemento no início do <header>
            header.insertBefore(logoHeader, header.firstChild);
        }*/
        if (divisoriacontainer) {
            divisoriacontainer.style.position = 'static';
            divisoriacontainer.style.marginTop = '0rem';
        }

        if (container_inicial) {
            container_inicial.style.marginTop = '0rem'; // Igual à altura do header
        }

        if (logo_bahiatecsolar) {
            logo_bahiatecsolar.style.margintop = '2rem';
            logo_bahiatecsolar.style.height = '10rem'; // Igual à altura do header
            logo_bahiatecsolar.style.width = '20rem'; // Igual à altura do header

            logo_bahiatecsolar.src = './img_Semex/LOGO-SITE-SEMANA-BAIANA-DE-EXTENSÃO-E-CULTURA.png';
        }
    }
});

function menuShow() {
    let menuMobile = document.querySelector('.mobile-menu');

    if (menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open');
        document.querySelector('.icon').src = "./img_Semex/Icons/menu_white_36dp.svg";
        // Revertendo as alterações para o menu móvel fechado
        menuMobile.style.height = '0';
        menuMobile.style.position = 'absolute';
    } else {
        menuMobile.classList.add('open');
        document.querySelector('.icon').src = "./img_Semex/Icons/close_white_36dp.svg";
        // Definindo a altura do menu móvel como 100% da altura da janela
        menuMobile.style.height = 'auto';
        // Definindo a posição como 'fixed' para que o menu não empurre o conteúdo
        menuMobile.style.position = 'fixed';
        // Adicionando rolagem se o conteúdo do menu for maior que a altura da janela
        menuMobile.style.overflowY = 'auto';
    }
}

window.addEventListener('scroll', function() {
    var header = document.querySelector('header');
    var menuMobile = document.querySelector('.mobile-menu');
    var scrollPosition = window.scrollY;
    var isHeaderFixed = header.classList.contains('fixed');

    if (scrollPosition <= 200) {
        if (menuMobile) {
            var topPosition = (40 - scrollPosition / 100) + 'vh';
            menuMobile.style.top = topPosition;
            menuMobile.style.position = 'absolute'; // Mantém a posição normal
        }
    } else {
        header.classList.add('fixed');
        if (menuMobile) {
            menuMobile.style.top = '71.98px'; // Fixa o menu móvel no topo da tela
            menuMobile.style.position = 'fixed';
        }
    }
});


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

document.getElementById("buttonDia1").addEventListener("click", function() {
    var dropdown = document.getElementById("dia1");
    if (dropdown.style.display === "none" || dropdown.style.display === "") {
        dropdown.style.display = "block";
    } else {
        dropdown.style.display = "none";
    }
});