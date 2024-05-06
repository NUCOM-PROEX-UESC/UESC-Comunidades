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
    titulo:
      "Criação de Negócios de Impacto: Estruturação de Negócios no Assentamento Frey Vantuy, Ilhéus - Bahia",
    link: "./uesccomunidade.html?projeto=projeto5",
    coordenador: "Coordenador: João Carlos de Pádua Andrade",
  },
  {
    imgUrl: "./img/uesccomunidades/cursoespanhol.jpg",
    titulo: "Curso de Espanhol para o ENEM",
    link: "./uesccomunidade.html?projeto=projeto6",
    coordenador: "Coordenadora: Fabiana Brandão Silva Amorim",
  },
  {
    imgUrl: "./img/uesccomunidades/educacaofinanceira.jpg",
    titulo: "Educação Financeira na Escola",
    link: "./uesccomunidade.html?projeto=projeto7",
    coordenador: "Coordenador: Omar Santos Costa",
  },
  {
    imgUrl: "./img/uesccomunidades/festivalculinario.jpg",
    titulo: "Festival Culinário e Cultural da Agricultura Familiar",
    link: "./uesccomunidade.html?projeto=projeto8",
    coordenador: "Coordenadora: Solange França",
  },
  {
    imgUrl: "./img/uesccomunidades/illuminari.jpg",
    titulo: "Illuminare",
    link: "./uesccomunidade.html?projeto=projeto9",
    coordenador: "Coordenador: Guilhardes de Jesus Júnior",
  },
  {
    imgUrl: "./img/uesccomunidades/implantacaohorta.jpg",
    titulo:
      "Implantação de uma Horta Escolar na Escola Municipal Professora Jardelina Azevedo Leal, Salobrinho - Ilhéus, Bahia",
    link: "./uesccomunidade.html?projeto=projeto10",
    coordenador: "Coordenadora: Norma Eliane Pereira",
  },
  {
    imgUrl: "./img/uesccomunidades/incubadora.jpg",
    titulo: "Incubadora de Negócios Populares de Salobrinho",
    link: "./uesccomunidade.html?projeto=projeto11",
    coordenador: "Coordenador: Maria Josefina Vervloet Fontes",
  },
  {
    imgUrl: "./img/uesccomunidades/implantacaoespacos.jpg",
    titulo:
      "Implantação de Espaços Educativos em Ações Integradas no Bairro Salobrinho",
    link: "./uesccomunidade.html?projeto=projeto12",
    coordenador: "Coordenadora: Sandra Cristina Souza Reis Abreu",
  },
  {
    imgUrl: "./img/uesccomunidades/laboratorioredacao.jpg",
    titulo: "Laboratório de redação para o ENEM",
    link: "./uesccomunidade.html?projeto=projeto13",
    coordenador: "Coordenadora: Camila Alves Gusmão",
  },
  {
    imgUrl: "./img/uesccomunidades/cineclube.jpg",
    titulo: "Brincando e Aprendendo na Comunidade",
    link: "./uesccomunidade.html?projeto=projeto2",
    coordenador: "Coordenadora: Cândida Maria Santos Daltro Alves",
  },
  {
    imgUrl: "./img/uesccomunidades/capoeirasalobrinho.jpg",
    titulo: "Pedagogia das Margens: cineclube com debate",
    link: "./uesccomunidade.html?projeto=projeto14",
    coordenador: "Coordenadora: Ivone Maia de Mello",
  },
  {
    imgUrl: "./img/uesccomunidades/percepcao.jpg",
    titulo:
      "Percepção e diagnósticos socioambientais à luz do Plano Nacional de Prevenção de Desastres Naturais – Lei 12.608/2012: Estudo de caso dos bairros Salobrinho e Banco da Vitória",
    link: "./uesccomunidade.html?projeto=projeto15",
    coordenador: "Coordenador: Cleverson Alves de Lima",
  },
  {
    imgUrl: "./img/uesccomunidades/pipocacinema.jpg",
    titulo: "Pipoca, Cinema, Literatura e Arte: Diversidade na Escola",
    link: "./uesccomunidade.html?projeto=projeto16",
    coordenador: "Coordenadora: Sirlândia Souza Santana",
  },
  {
    imgUrl: "./img/uesccomunidades/prevencaocombinada.jpg",
    titulo: "Prevenção Combinada: Estratégias de Educação Afetiva",
    link: "./uesccomunidade.html?projeto=projeto17",
    coordenador: "Coordenadora: Danielle Leite Silva",
  },
  {
    imgUrl: "./img/uesccomunidades/raizescapoeira.jpg",
    titulo: "Raízes da Capoeira no Salobrinho",
    link: "./uesccomunidade.html?projeto=projeto18",
    coordenador: "Coordenador: Antonio Marcus Lima Figueiredo",
  },
  {
    imgUrl: "./img/uesccomunidades/mulheresimpreendedoras.jpg",
    titulo: "Rede de Mulheres Empreendedoras do Bairro Salobrinho - REMES",
    link: "./uesccomunidade.html?projeto=projeto19",
    coordenador: "Coordenadora: Katianny Gomes Santana Estival",
  },
  {
    imgUrl: "./img/uesccomunidades/revitae.jpg",
    titulo: "RevitaÊ",
    link: "./uesccomunidade.html?projeto=projeto20",
    coordenador: "Coordenador: Guilhardes de Jesus Júnior",
  },
  {
    imgUrl: "./img/uesccomunidades/tecnologiasinformacao.jpg",
    titulo:
      "Tecnologias em Informação e Comunicação, Internet das Coisas e Ensino de Física para o exercício da Cidadania no Salobrinho",
    link: "./uesccomunidade.html?projeto=projeto21",
    coordenador: "Coordenador: Adriano Marcus Stuchi",
  },
  {
    imgUrl: "./img/uesccomunidades/uesc4.jpg",
    titulo: "UESC 4.0: Tecnologias nas escolas",
    link: "./uesccomunidade.html?projeto=projeto22",
    coordenador: "Coordenadora: Geovana Pires Lima",
  },
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

// Função para adicionar os cards à página
function addCardsToPage(cardsData, numCards) {
  const cardContainer = document.getElementById("cardContainer");
  cardContainer.style.display = "flex"; // Definindo display flex
  cardContainer.style.justifyContent = "space-evenly"; // Definindo espaço uniforme entre os cards
  cardContainer.style.margin = "auto"; // Adicionando margem automática
  cardContainer.style.marginTop = "1rem"; // Adicionando margem superior
  cardContainer.style.width = "60rem"; // Definindo largura fixa
  cardContainer.style.gap = "2rem"; // Adicionando espaçamento entre os cards

  // Verifica o tamanho da tela
  const screenWidth = window.innerWidth;
  if (screenWidth <= 768) {
    // Se a tela for menor ou igual a 768px (tablet ou dispositivo móvel), ajusta o layout
    cardContainer.style.width = "90vw"; // Definindo largura para ocupar 90% da largura da tela
    cardContainer.style.padding = "1rem"; // Reduz o padding do carrossel
    numCards = 1; // Define o número de cards para 1 em dispositivos móveis
  }

  const randomCards = selectRandomCards(cardsData).slice(0, numCards); // Seleciona aleatoriamente os cards
  randomCards.forEach((data) => {
    const card = createCard(data);
    cardContainer.appendChild(card);
  });
}

// Adiciona os cards à página
addCardsToPage(cardsData, 3); // Exibe 3 cards por padrão
