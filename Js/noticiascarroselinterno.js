const news = [
    {
          id: "faeg-sul-realiza-encontro-territorial-de-cultura-em-santa-luzia",
          title: "FAEG-SUL realiza Encontro Territorial de Cultura em Santa Luzia",
          image: "./img/imagens-noticias/noticia_encontro_territorial_de_cultura_em_santa_luzia_card.png",
          description: "FAEG-SUL realiza Encontro Territorial de Cultura para formar os gestores municipais na consolidação dos Sistemas de Cultura de seus municípios",
          date: "18/06/2024",
          alt: ""
    },
    {
          id: "eq-play-realiza-mais-um-edicao-de-jogos-com-estudantes-de-engenharia-quimica-da-uesc",
          title: "E.Q Play realiza mais um edição de jogos com Estudantes de Engenharia Química da UESC",
          image: "./img/imagens-noticias/noticia_edicao_de_jogos_com_estudantes_de_engenharia_quimica_da_uesc_card.png",
          description: "Em parceria com a Veracel Celulose, o evento foi uma edição especial focada no aprendizado e inovação na indústria de papel e celulose com a imersão prática através de minicursos e palestras.",
          date: "18/06/2024",
          alt: ""
    },
    {
      id: "curricularizacao-da-extensao-atende-a-escola-fe-e-alegria-no-municipio-de-ilheus",
      title: "Curricularização da Extensão atende a Escola Fé e Alegria no município de Ilhéus",
      image: "./img/imagens-noticias/noticia_extensao_atende_a_escola_Fe_e_alegria_card.png",
      description: "A iniciativa foi planejada a partir da integração das disciplinas Plantas Medicinais e Plantas Alimentícias Não Convencionais (PANC), ambas ministradas pela Dr.ª Larissa Costa, professora vinculada ao Departamento de Ciências Biológicas.",
      date: "10 de Julho de 2024",
      alt: ""
    },
    {
      id: "uesc-sedia-o-nucleo-da-escolinha-de-triathlon-formando-campeoes",
      category: "Extensão Universitária",
      title: "UESC sedia o Núcleo da Escolinha de Triathlon Formando Campeões",
      image: "./img/imagens-noticias/noticia_uesc_sedia_escolinha_de_triathlon_card.png",
      description: "A Escolinha de Triathlon Formando Campeões nasceu em 2015, em Curitiba-PR, cidade natal de seu idealizador, padrinho e gestor, o triatleta olímpico Juraci Moreira, medalhista pan-americano, hexacampeão brasileiro da modalidade e três vezes representante olímpico.",
      date: "15 de Julho de 2024",
      alt: ""
    },
    {
      id: "ferradas-run-homenageara-o-autor-jorge-amado",
      category: "Eventos",
      title: "Ferradas Run Homenageará o autor Jorge Amado",
      image: "./img/imagens-noticias/noticia_ferradas_run_homenageara_o_autor_jorge_amado_card.jpg",
      description: "A Universidade Estadual de Santa Cruz (UESC), em parceria com a Associação dos Municípios da Região Cacaueira (AMURC), está apoiando a corrida FERRADAS RUN, que homenageia o renomado escritor Jorge Amado",
      date: "18 de Julho de 2024",
      alt: ""
    },
    {
      id: "programa-upt-uesc-realiza-encontro-formativo-para-professores-e-monitores",
      category: "Educação",
      title: "Programa UPT/UESC realiza encontro formativo para professores e monitores",
      image: "./img/imagens-noticias/noticias_encontro_formativo_para_professores_e_monitores_card.png",
      description: "O encontro formativo reuniu professores e monitores com o objetivo de fortalecer a atuação docente crítica e emancipatória, abordando práticas pedagógicas e estratégias de preparação para os processos seletivos de ingresso ao ensino superior",
      date: "22 de Julho de 2024",
      alt: ""
    },
    {
      id: "20-anos-da-lei-cultura-viva-e-tema-do-encontro-territorial-de-cultura-do-faeg-sul",
      category: "Evento",
      title: "20 anos da Lei Cultura Viva é tema do encontro territorial de cultura do FAEG-SUL",
      image: "./img/imagens-noticias/noticia_encontro_territorial_de_cultura_do_faeg_sul_card.png",
      description: "FAEG-SUL realiza encontro territorial de cultura em celebração aos 20 anos da Lei Cultura Viva.",
      date: "31 de Julho de 2024",
      alt: ""
    },
    {
      id: "inscricoes-abertas-para-as-atividades-da-universidade-aberta-a-terceira-idade",
      category: "Educação",
      title: "Inscrições Abertas Para As Atividades Da Universidade Aberta À Terceira Idade",
      image: "./img/imagens-noticias/noticia_inscricoes_abertas_para_as_atividades_da_universidade_aberta_a_terceira_idade_card.png",
      description: "As atividades serão realizadas na modalidade presencial e podem se inscrever qualquer pessoa com idade a partir de 50 anos.",
      date: "01 de agosto de 2024",
      alt: ""
    },  
    {
      id: "proex-lanca-projeto-sextou-cultural-durante-calourada-2024-2",
      category: "Eventos",
      title: "PROEX lança Projeto Sextou Cultural durante Calourada 2024.2",
      image: "./img/imagens-noticias/noticia_sextou_card.png",
      description: "O novo projeto é dedicado à promoção da cultura e dos talentos da comunidade acadêmica e regional. O evento estreia durante a Calourada 2024.2, no dia 14 de agosto, com uma edição especial que incluirá o aguardado Show de Talentos, cujas inscrições estão abertas até 13 de agosto​",
      date: "09 de agosto de 2024",
      alt: "",
    },
    {
      id: "proex-marca-presenca-na-ferradas-run-em-itabuna-ba",
      category: "Eventos",
      title: "PROEX  marca presença na Ferradas Run em Itabuna - BA",
      image: "./img/imagens-noticias/noticia_proex_marca_presenca_na_ferradas_run_em_itabuna_ba_card.png",
      description: "No dia 11 de agosto de 2024 aconteceu a corrida denominada FERRADAS RUN no município de Itabuna, Bahia.​",
      date: "15 de agosto de 2024",
      alt: "",
    },
    {
      id: "sala-lilas-suporte-de-ouvidoria-para-mulheres",
      category: "Eventos",
      title: "Sala Lilás – Suporte de Ouvidoria para Mulheres",
      image: "./img/imagens-noticias/noticia_sala_lilas_suporte_de_ouvidoria_para_mulheres_card.png",
      description: "Sala Lilás oferece suporte especializado para mulheres vítimas de violência na Bahia​",
      date: "22 de agosto de 2024",
      alt: "",
    },
    {
      id: "a-feira-de-extensao-uesc-2024-agitou-o-campus",
      category: "Eventos",
      title: "A Feira de Extensão UESC 2024 agitou o campus!",
      image: "./img/imagens-noticias/noticia_a_feira_de_extensao_uesc_2024_agitou_o_campus_capa.png",
      description: "A Feira de Extensão UESC 2024 reuniu projetos inovadores e apresentações culturais, promovendo a interação entre a universidade e a comunidade, e destacando o impacto positivo da extensão universitária.​",
      date: "18 de setembro de 2024",
      alt: ""
    },
  ];

  // Função para embaralhar um array
function shuffleArray(array) {
      for (let i = array.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [array[i], array[j]] = [array[j], array[i]];
      }
      return array;
  }
  
  // Função para selecionar e embaralhar as últimas 10 notícias
  function shuffleAndSelectNews(news) {
      const lastTenNews = news.slice(-10); // Seleciona as últimas 10 notícias
      return shuffleArray(lastTenNews).slice(0, 3); // Embaralha e seleciona 3 delas
  }
  
  // Função para preencher os cards com dados das notícias selecionadas
  function fillNewsCards(newsData) {
      const cardContainers = document.querySelectorAll(".card");
      const shuffledData = shuffleAndSelectNews(newsData);
    
      shuffledData.forEach((data, index) => {
          const cardContainer = cardContainers[index];
          const img = cardContainer.querySelector(".news-image");
          const titleLink = cardContainer.querySelector(".news-title");
          const dateP = cardContainer.querySelector(".news-date");
    
          img.src = data.image;
          img.alt = data.alt;
    
          // Define o ID da notícia como um atributo data
          titleLink.setAttribute("data-news-id", data.id);
          titleLink.textContent = data.title;
    
          dateP.textContent = data.date;
    
          // Adiciona um evento de clique para redirecionar para a página da notícia
          titleLink.addEventListener("click", function() {
              const newsId = this.getAttribute("data-news-id");
              window.location.href = `noticia.html?id=${newsId}`;
          });
      });
  }
  
  // Exemplo de uso:
  // Supondo que 'news' seja o array de todas as notícias disponíveis
  // Chamada inicial da função para preencher os cards com dados aleatórios
  fillNewsCards(news);