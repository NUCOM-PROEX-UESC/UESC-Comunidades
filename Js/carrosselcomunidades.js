// Dados dos cards
const cardsData = [
    // Aqui vão os dados dos 22 cards
    // Exemplo:
    {
        imgUrl: "./img/uesccomunidades/assistenciatecnica.jpg",
        titulo:
            "Assistência Técnica em Processamento de Produtos Agropecuários na Agroindústria do Assentamento Frei Vantuy",
        link: "./uesccomunidade.html?projeto=projeto1",
        coordenador: "Coordenador: Antônio Fábio Reis Figueiredo",
    },
    {
        imgUrl: "./img/uesccomunidades/brincandoeaprendendonacomunidade.jpg",
        titulo: "Brincando e Aprendendo na Comunidade",
        link: "./uesccomunidade.html?projeto=projeto2",
        coordenador: "Coordenadora: Cândida Maria Santos Daltro Alves",
    },
    {
        imgUrl: "./img/uesccomunidades/capoeirasalobrinho.jpg",
        titulo: "Capoeira do Salobrinho e valorização da cultura afro-brasileira",
        link: "./uesccomunidade.html?projeto=projeto3",
        coordenador: "Coordenador: Luiz Henrique da Silva",
    },
    {
        imgUrl: "./img/uesccomunidades/uescescolas.jpg",
        titulo: "Ciências da Uesc nas escolas: Diálogos Inclusivos",
        link: "./uesccomunidade.html?projeto=projeto4",
        coordenador: "Coordenadora: Genigleide Santos da Hora",
    },
    {
        imgUrl: "./img/uesccomunidades/criacaonegocios.jpg",
        titulo: "Criação de Negócios de Impacto: Estruturação de Negócios no Assentamento Frey Vantuy, Ilhéus - Bahia",
        link: "./uesccomunidade.html?projeto=projeto5",
        coordenador: "Coordenador: João Carlos de Pádua Andrade",
    },
    {
        imgUrl: "./img/uesccomunidades/cursoespanhol.jpg",
        titulo: "Curso de Espanhol para o ENEM",
        link: "./uesccomunidade.html?projeto=projeto6",
        coordenador: "Coordenadora: Fabiana Brandão Silva Amorim",
    },
    // Adicione dados para os outros 16 cards aqui...
];

// Função para selecionar aleatoriamente 3 cards do array
function selectRandomCards(cardsData) {
    const shuffledCards = cardsData.sort(() => Math.random() - 0.5); // Embaralha o array
    return shuffledCards.slice(0, 3); // Retorna os 3 primeiros cards
}

// Função para criar um card
function createCard(data) {
    const cardDiv = document.createElement("div");
    cardDiv.classList.add("card");

    const imageContentDiv = document.createElement("div");
    imageContentDiv.classList.add("image-content");

    const img = document.createElement("img");
    img.src = data.imgUrl;
    img.alt = "";
    img.style.height = "100%"; // Adicionando a altura de 100%
    img.style.width = "100%"; // Adicionando a largura de 100%
    img.style.objectFit = "cover"; // Adicionando object-fit: cover
    img.style.borderTopLeftRadius = "8px"; // Adicionando border-top-left-radius
    img.style.borderTopRightRadius = "8px"; // Adicionando border-top-right-radius

    const cardContentDiv = document.createElement("div");
    cardContentDiv.classList.add("card-content");

    const tituloH2 = document.createElement("h2");
    tituloH2.classList.add("tituloprojeto");

    const tituloLink = document.createElement("a");
    tituloLink.href = data.link;
    tituloLink.textContent = data.titulo;

    const coordenadorH3 = document.createElement("h3");
    coordenadorH3.classList.add("coordenador");
    coordenadorH3.textContent = data.coordenador;

    tituloH2.appendChild(tituloLink);
    cardContentDiv.appendChild(tituloH2);
    cardContentDiv.appendChild(coordenadorH3);

    imageContentDiv.appendChild(img);
    cardDiv.appendChild(imageContentDiv);
    cardDiv.appendChild(cardContentDiv);

    return cardDiv;
}

// Função para adicionar os 3 cards aleatórios à página
function addRandomCardsToPage(cardsData) {
    const cardContainer = document.getElementById("cardContainer");
    cardContainer.style.display = "flex"; // Definindo display flex
    cardContainer.style.justifyContent = "space-evenly"; // Definindo espaço uniforme entre os cards
    cardContainer.style.margin = "auto"; // Adicionando margem automática
    cardContainer.style.marginTop = "3rem"; // Adicionando margem superior
    cardContainer.style.width = "60rem"; // Definindo largura fixa
    cardContainer.style.gap = "2rem"; // Adicionando espaçamento entre os cards

    const randomCards = selectRandomCards(cardsData); // Seleciona aleatoriamente 3 cards
    randomCards.forEach((data) => {
        const card = createCard(data);
        cardContainer.appendChild(card);
    });
}

// Adiciona os 3 cards aleatórios à página
addRandomCardsToPage(cardsData);
