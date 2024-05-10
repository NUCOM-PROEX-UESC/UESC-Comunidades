// Dados dos cards
const cardsData = [
  // Aqui vão os dados dos 22 cards
  // Exemplo:
  {
    imgUrl: "./img/uesccomunidades/assistenciatecnica.jpg",
    titulo: "Assistência Técnica em Processamento de Produtos Agropecuários",
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
    titulo: "Implantação de uma Horta Escolar, Salobrinho - Ilhéus, Bahia",
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
      "Plano Nacional de Prevenção de Desastres Naturais - Percepção e diagnósticos",
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
      "Tecnologias em Informação e Comunicação, Internet das Coisas e Ensino de Física",
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

var cardsToShow;

// Função para selecionar aleatoriamente 3 cards do array
function selectRandomCards(cardsData, numCards) {
  const shuffledCards = cardsData.sort(() => Math.random() - 0.5); // Embaralha o array
  return shuffledCards.slice(0, numCards); // Retorna os cards aleatórios
}

// Função para criar um card
function createCard(data) {
  const cardDiv = document.createElement("div");
  if (window.innerWidth <= 768) {
    cardsToShow = 1; // Se for uma tela móvel, mostra apenas 1 card
    cardDiv.classList.add("card");
    cardDiv.style.marginTop = "1rem";
    cardDiv.style.width = "50vw"; // Definindo uma largura fixa para todos os cards
    cardDiv.style.borderRadius = "8px"; // Adicionando bordas arredondadas
  } else {
    cardDiv.classList.add("card");
    cardDiv.style.marginTop = "1rem";
    cardDiv.style.width = "20vw"; // Definindo uma largura fixa para todos os cards
    cardDiv.style.borderRadius = "8px"; // Adicionando bordas arredondadas
  }

  const img = document.createElement("img");
  img.src = data.imgUrl;
  img.alt = "";
  img.style.width = "100%";
  img.style.objectFit = "cover"; // Adicionando object-fit: cover
  img.style.borderTopLeftRadius = "8px"; // Adicionando border-top-left-radius
  img.style.borderTopRightRadius = "8px"; // Adicionando border-top-right-radius

  const contentDiv = document.createElement("div");
  contentDiv.classList.add("content");
  contentDiv.style.padding = "0.5rem"; // Adicionando espaçamento interno apenas na div de conteúdo

  const tituloLink = document.createElement("a");
  tituloLink.href = data.link;
  tituloLink.textContent = data.titulo;
  tituloLink.classList.add("tituloprojeto");
  tituloLink.style.marginBottom = "0.5rem"; // Afastando o link da parte inferior

  const coordenadorH3 = document.createElement("h3");
  coordenadorH3.textContent = data.coordenador;
  coordenadorH3.classList.add("coordenador");
  coordenadorH3.style.marginTop = "0"; // Removendo a margem superior do h3

  contentDiv.appendChild(tituloLink);
  contentDiv.appendChild(coordenadorH3);

  cardDiv.appendChild(img);
  cardDiv.appendChild(contentDiv);

  return cardDiv;
}

// Função para adicionar os cards à página, ajustando o número com base no tipo de tela
function addCardsToPage(cardsData, numCards) {
  const cardContainer = document.getElementById("cardContainer");
  cardContainer.style.display = "flex"; // Definindo display flex
  cardContainer.style.flexWrap = "wrap";
  cardContainer.style.justifyContent = "center";
  cardContainer.style.gap = "1rem";

  cardsToShow = 3; // Define o número padrão de cards a serem mostrados

  // Verifica se é uma tela móvel

  const randomCards = selectRandomCards(cardsData, cardsToShow);
  randomCards.forEach((data) => {
    const card = createCard(data);
    cardContainer.appendChild(card);
  });
}

addCardsToPage(cardsData, cardsToShow); // Exibe 3 cards por padrão
