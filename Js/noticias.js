const newsPerPage = 10;
let currentPage = 1;

const news = [
  {
    id: 0,
    category: "Parcerias",
    title: "Pró-Reitores de Extensão da UESC e UFSB discutem futuras parcerias institucionais",
    image: "./img/imagens-noticias/parceria_uesc_e_ufsb_secundaria.jpg",
    description: "Os pró-reitores de extensão da UESC e da UFSB reuniram-se para tratar de futuras parcerias institucionais colaborativas de promoção de atividades extensionistas, em que foram discutidos o...",
    date: "20/07/2023",
    alt: "imagem pró-reitores de extensão"
  },
  {
    id: 1,
    category: "Educação",
    title: "Uesc divulga o resultado do edital PROBEX",
    image: "./img/imagens-noticias/noticia_divulgacao_edital_probex_073_secundaria.png",
    description: "Uesc publica resultados do Edital 073/2023 para abertura das inscrições do edital PROBEX",
    date: "20/07/2023",
    alt: ""
  },
  {
    id: 2,
    category: "Eventos",
    title: "UESC realiza Congresso Internacional sobre Educação Empreendedora e Cidadania",
    image: "./img/imagens-noticias/noticia_congresso_secundaria.png",
    description: "UESC organiza o III Congresso Internacional de Educação Empreendedora e Cidadania com o tema: Construindo pontes. Criando cultura colaborativa.",
    date: "20/07/2023",
    alt: ""
  },
  {
    id: 3,
    category: "Cultura",
    title: "Proex-UESC participa da itinerância FAEG-SUL em Itacaré",
    image: "./img/imagens-noticias/noticia_faeg_itacare_card.jpg",
    description: "Proex e Programa Agir participam do encontro cultural promovido por FAEG-SUL no Centro Cultural Porto de Trás de Itacaré",
    date: "21/07/2023",
    alt: ""
  },
  {
    id: 4,
    category: "Cultura",
    title: "UBORÉPETEÍ.UNO: A extensão universitária na cultura regional",
    image: "./img/imagens-noticias/noticia_tpi_card.jpg",
    description: "Novo espetáculo do Teatro Popular de Ilhéus é uma parceria com a Universidade Estadual de Santa Cruz, a Pró-Reitoria de Extensão-Proex, o Observatório Astronômico e o Núcleo de Artes da UESC",
    date: "21/07/2023",
    alt: ""
  },
  {
    id: 5,
    category: "Cultura",
    title: "Extensão e Cultura: Camacã recebe FAEG-Sul",
    image: "./img/imagens-noticias/noticia_faeg_camaca_card.jpg",
    description: "PROEX participou mais uma vez do encontro FAEG-SUL que aconteceu em Camacã-Bahia",
    date: "31/07/2023",
    alt: ""
  },
  {
    id: 6,
    category: "Eventos",
    title: "PROEX participa do II Fórum de Mulheres Quilombolas do Território Litoral Sul",
    image: "./img/imagens-noticias/noticia_mulheres_quilombolas_card.jpg",
    description: "A Pró-Reitoria de Extensão participa do Grupo de Trabalho de Educação Quilombola no II Fórum de Mulheres Quilombolas",
    date: "31/07/2023",
    alt: ""
  },
  {
    id: 7,
    category: "Meio Ambiente",
    title: "Muda de Pau-Brasil é plantada em ato simbólico em Ilhéus",
    image: "./img/imagens-noticias/noticia_pauta_plantio_card.jpg",
    description: "Uma muda do Pau Brasil doada a Recém Nascido do HMIJS foi plantada no Jardim Ranitla",
    date: "20/09/2023",
    alt: ""
  },
  {
    id: 8,
    category: "Eventos",
    title: "PROEX promove II Reunião com Diretores e Coordenadores",
    image: "./img/imagens-noticias/noticia_ii_reuniao_proex_card.jpg",
    description: "II Reunião com Diretores de Departamentos de Coordenadores aborda Desenvolvimento e Integração da Extensão Universitária",
    date: "22/09/2023",
    alt: ""
  },
  {
    id: 9,
    category: "Parcerias",
    title: "Parceria na Extensão: UESC e UFSB organizam a 1ª Semana Baiana de Cultura",
    image: "./img/imagens-noticias/noticia_uesc_ufsb_card.jpg",
    description: "UESC e UFSB planejam a 1ª Semana Baiana de Extensão e Cultura",
    date: "25/09/2023",
    alt: ""
  },
  {
    id: 10,
    category: "Eventos",
    title: "UESC apoia o 2º Fórum Brasileiro dos Direitos da Natureza",
    image: "./img/imagens-noticias/noticia_direito_natureza_card.jpg",
    description: "Acontecerá nos dias 6 e 7 de outubro em Ilhéus o 2º Fórum Brasileiro dos Direitos da Natureza.",
    date: "28/09/2023",
    alt: ""
  },
  {
    id: 11,
    category: "Extensão Universitária",
    title: "PROEX/UESC realiza escuta ativa colaborativa com a comunidade do Salobrinho, para lançar o Edital UESC Comunidades",
    image: "./img/imagens-noticias/noticia_encontro_comunidade_card.jpg",
    description: "",
    date: "03/10/2023",
    alt: ""
  },
  {
    id: 12,
    category: "Extensão Universitária",
    title: "UESC/PROEX lançam edital UESC Comunidades",
    image: "./img/imagens-noticias/noticia_uesc_comunidade_card.png",
    description: "Serão investidos 400 mil reais para o custeio de projetos descentralizados em forma de Termo de Outorga",
    date: "30/10/2023",
    alt: ""
  },
  {
    id: 13,
    category: "Parcerias",
    title: "UESC através do Ensino, Extensão, Inovação e Pesquisa promove Semana Científica",
    image: "./img/imagens-noticias/noticia_notas_sic_card.jpg",
    description: "Evento discute pesquisa, ensino, extensão e inovação realizadas na UESC com apresentações de trabalhos.",
    date: "10/11/2023",
    alt: ""
  },
  {
    id: 14,
    category: "Eventos",
    title: "UESC promove a 6ª Festa Literária de Ilhéus",
    image: "./img/imagens-noticias/noticia_fli_card.jpg",
    description: "A FLI aconteceu nos dias 8,9 e 10 de novembro no Teatro Municipal de Ilhéus",
    date: "10/11/2023",
    alt: ""
  },
  {
    id: 15,
    category: "Educação",
    title: "Universidade Para Todos da UESC participa de encontro em Salvador",
    image: "./img/imagens-noticias/D50_0471_Principal_Danilo_Oliveira - SEC.jpeg",
    description: "O UPT UESC apresenta os resultados do programa em evento promovido pela Secretária de Educação do Estado da Bahia.",
    date: "19/12/2023",
    alt: ""
  },
  {
    id: 16,
    category: "Extensão Universitária",
    title: "PROEX e a Aldeia Igalha discutem elaboração do Edital UESC Comunidades Indígenas",
    image: "./img/imagens-noticias/noticia_proex_aldeia_card.jpg",
    description: "A PROEX realizou uma escuta ativa em Olivença para discutir o lançamento do Edital voltado para as etnias indígenas.",
    date: "20/02/2024",
    alt: ""
  },
  {
    id: 17,
    category: "Educação",
    title: "Reunião de alinhamento das atividades conjuntas entre UESC/Proex e Amurc",
    image: "./img/imagens-noticias/noticia_reuniao_agir_amurc_card.jpg",
    description: "A PROEX e representantes da COINC/Agir 2.0 reuniram-se com a Amurc, para o planejamento das ações de 2024.",
    date: "07/03/2024",
    alt: ""
  },
  {
    id: 18,
    category: "Meio Ambiente",
    title: "A PROEX esteve presente na inauguração da placa da trilha interpretativa do Horto.",
    image: "./img/imagens-noticias/noticia_proex_horto_card.jpg",
    description: "Estiveram presentes na inauguração a Equipe do Horto e da Proex, bem como os alunos dos cursos de Biologia.",
    date: "11/03/2024",
    alt: ""
  },
  {
    id: 19,
    category: "Educação",
    title: "A PROEX/UESC viabiliza a aquisição de materiais esportivos para as Atléticas.",
    image: "./img/imagens-noticias/noticias_proex_atletica_card.jpg",
    description: "No dia 08 de março foi entregue materiais esportivos para as Atléticas da UESC com a presença da reitoria e da PROAPE.",
    date: "12/03/2024",
    alt: ""
  },
  {
    id: 20,
    category: "Eventos",
    title: "Pró-Reitor de Extensão da UESC participou de evento no Ministério da Saúde.",
    image: "./img/imagens-noticias/noticias_proex_seminario_nacional_card.png",
    description: "A PROEX participa do Seminário Nacional promovido pelo MS sobre a Formação em Saúde e a Curricularização da Extensão.",
    date: "08/04/2024",
    alt: ""
  },
  {
    id: 21,
    category: "Educação",
    title: "NAU inicia a segunda turma do curso de extensão em Regência Coral e Instrumental.",
    image: "./img/imagens-noticias/noticias_proex_curso_de_regencia_card.png",
    description: "Nau abre inscrições para nova turma do curso de Extensão em Regência Coral e Instrumental, Violão e Violino, com presença do professor Márcio Medeiros.",
    date: "08/04/2024",
    alt: ""
  },
  {
    id: 22,
    category: "Meio Ambiente",
    title: "Composta Ilhéus na Proex: sustentabilidade na extensão",
    image: "./img/imagens-noticias/noticia_proex_composta_card.png",
    description: "Proex recebe composteira do projeto Composta Ilhéus - Fase II, da equipe do Gap Ilhéus.",
    date: "08/04/2024",
    alt: ""
  },
  {
    id: 23,
    category: "Educação",
    title: "O Escritório de Projetos da UESC é contemplado com o Edital da FAPESB",
    image: "./img/imagens-noticias/noticia_proex_EPEC_card.png",
    description: "A EPEC participa de reunião com a FAPESB para alinhar a próxima etapa do edital",
    date: "30/04/2024",
    alt: ""
  },
  {
    id: 24,
    category: "Extensão Universitária",
    title: "Projetos selecionados no Uesc Comunidades é apresentado a comunidade",
    image: "./img/imagens-noticias/noticia_proex_Lancamento_Comunidades_card.png",
    description: "Com a presença de representantes da comunidade do Salobrinho a equipe da Proex apresentou os projetos selecionados.",
    date: "10/04/2024",
    alt: ""
  },
  {
    id: 25,
    category: "Eventos",
    title: "PROEX promove o Seminário Esportivo com apoio da Liga Poliesportiva Universitária",
    image: "./img/imagens-noticias/noticia_proex_Seminario_Esportivo_card.png",
    description: "O evento possibilitou discussões entre a comunidade acadêmica acerca da importância e a organização do esporte na UESC.",
    date: "30/04/2024",
    alt: ""
  },
  {
    id: 26,
    category: "Educação",
    title: "Aulão do UPT debateu Políticas de Acesso e Permanência no Ensino Superior",
    image: "./img/imagens-noticias/noticia_reuniao_upt_card.png",
    description: "A aula online contou com a presença do Coordenador de Integração Comunitária Prof. Emerson Lucena",
    date: "07/05/2024",
    alt: ""
  },
  {
    id: 27,
    category: "Saúde",
    title: "Mutirão de Prevenção à Saúde da Tireoide acontecerá na UESC",
    image: "./img/imagens-noticias/Mutirao_Tireoide_card.png",
    description: "Especialistas e estudantes de Medicina realizarão atendimento a comunidade acadêmica na UESC no dia 17 de maio",
    date: "07/05/2024",
    alt: ""
  },
  {
    id: 28,
    category: "Educação",
    title: "A COINC e o EPEC promovem escuta ativa com os assentamentos Buike e Panelinha",
    image: "./img/imagens-noticias/noticia_escuta_EPEC_COINC_card.png",
    description: "Na oportunidade os produtores do Buike (São José da Vitória) e Panelinha (Almadina) falaram sobre as suas necessidades",
    date: "07/05/2024",
    alt: ""
  },
  {
    id: 29,
    category: "Educação",
    title: "Reunião ampliada com os dirigentes municipais de educação - FORSEC/AGIR 2.0",
    image: "./img/imagens-noticias/noticia_reuniao_FORSEC_AGIR_card.png",
    description: "Aconteceu na última sexta feira (03/05) o Fórum de Secretários Diretores e/ou Técnicos da Secretaria de Educação na UESC",
    date: "08/05/2024",
    alt: ""
  },
  {
    id: 30,
    category: "Empreendedorismo",
    title: "Projeto abre inscrições para transformar ideias em negócios consolidados",
    image: "./img/imagens-noticias/noticia_incubadora_salobrinho_card.png",
    description: "O projeto incubadoras de negócios do salobrinho do edital uesc comunidades abre inscrições para empreendedores",
    date: "08/05/2024",
    alt: ""
  },
  {
    id: 31,
    category: "Educação",
    title: "A programa AGIR 2.0 realiza através do fórum regional de assistência social- fras na uesc ações do forte suas 2024",
    image: "./img/imagens-noticias/forum_regional_assistencia_social_card.png",
    description: "Acontece hoje e amanhã no auditório Paulo Souto palestras e debates sobre a promoção social.",
    date: "08/05/2024",
    alt: ""
  },
  {
    id: 32,
    category: "Educação",
    title: "CONSU da UESC aprova concessão de uso da Fazenda Jassy",
    image: "./img/imagens-noticias/noticia_aprovacao-consu_card.png",
    description: "A área da Fazenda Jassy no município de Arataca será utilizada como Fazenda - Escola, num acordo inédito.",
    date: "20/05/2024",
    alt: ""
  },
  {
    id: 33,
    category: "Cultura",
    title: "Studio de Dança do Salobrinho ganha documentário",
    image: "./img/imagens-noticias/noticia_estudio_anferre_card.png",
    description: "Descubra através do documentário Anferre Dance: Pequenos Bailarinos, Grandes Sonhos como o Studio de Dança Anferre está transformando vidas no bairro do Salobrinho",
    date: "27/05/2024",
    alt: ""
  },
  {
    id: 34,
    category: "Educação",
    title: "COINC esteve presente na 7ª Edição do Formacampo",
    image: "./img/imagens-noticias/noticia_forma_campo_card.png",
    description: "Evento reuniu Instituições dos 27 Territórios de Identidade Baiano para debater a Educação no Campo e movimentos sociais",
    date: "27/05/2024",
    alt: ""
  },
  {
    id: 35,
    category: "Cultura",
    title: "FAEG-SUL realiza Encontro Territorial de Cultura na UESC",
    image: "./img/imagens-noticias/noticia_encontro_FAEG_card.png",
    description: "FAEG-SUL realiza Encontro Territorial de Cultura para formar os gestores municipais na consolidação dos Sistemas de Cultura de seus municípios",
    date: "28/05/2024",
    alt: ""
  },
  {
    id: 36,
    category: "Eventos",
    title: "A Proex através da COINC promove evento do Dia Nacional do Cigano",
    image: "./img/imagens-noticias/noticia_ciganos_card.png",
    description: "Aconteceu na sala do UNATI uma roda de conversa em comemoração ao Dia Nacional do Cigano.",
    date: "28/05/2024",
    alt: ""
  },
  {
    id: 37,
    category: "Empreendedorismo",
    title: "Pró-reitor de Extensão se encontra com a Equipe Enactus Uesc",
    image: "./img/imagens-noticias/noticia_enactus_card.png",
    description: "Pró-reitor de Extensão, Cristiano Bahia, reuniu-se com a equipe Enactus Uesc para discutir o apoio da UESC através da Proex para a participação no ENEB, visando destacar seus projetos de empreendedorismo social.",
    date: "29/05/2024",
    alt: ""
  },
  {
    id: 38,
    category: "Eventos",
    title: "PROEX promove evento sobre a Lei de Licitações Municipais na UESC",
    image: "./img/imagens-noticias/noticia_evento_FOPROM_card.png",
    description: "A PROEX através do Agir 2.0 em parceria com a AMURC e o Fórum de Procuradores realizam evento formativo sobre Licitações.",
    date: "30/05/2024",
    alt: ""
  },
  {
    id: 39,
    category: "Cultura",
    title: "FAEG-SUL realiza Encontro Territorial de Cultura na UESC",
    image: "./img/imagens-noticias/noticia_encontro_territorial_de_cultura_card.png",
    description: "FAEG-SUL realiza Encontro Territorial de Cultura para formar os gestores municipais na consolidação dos Sistemas de Cultura de seus municípios",
    date: "05/06/2024",
    alt: ""
  },
  {
    id: 40,
    category: "Eventos",
    title: "Cientista baiana que mapeou o genoma do Coronavírus vem a UESC em Palestra Aberta",
    image: "./img/imagens-noticias/noticia_jaqueline_goes_card.png",
    description: "Cientista Jaqueline Goes, que liderou o sequenciamento do genoma do coronavírus no Brasil, dará uma palestra aberta sobre Iniciativas e Estratégias para a Popularização da Ciência",
    date: "05/06/2024",
    alt: ""
  },
  {
    id: 41,
    category: "Meio Ambiente",
    title: "Projeto de Extensão Horto Florestal Realiza Ação de Doação de Árvores na UESC",
    image: "./img/imagens-noticias/noticia_horto_florestal_card.png",
    description: "Com a distribuição de centenas de mudas nativas e plantas medicinais, a iniciativa destacou, no Dia Mundial do Meio Ambiente, a importância de ações como o plantio de árvores para a preservação ambiental. A ação foi um sucesso e superou as expectativas dos organizadores",
    date: "06/06/2024",
    alt: ""
  },
  {
    id: 42,
    category: "Eventos",
    title: "PROEX/COINC participou do 1º Seminário do Curso Técnico em Meio Ambiente",
    image: "./img/imagens-noticias/noticia_palestra_taboquinhas_card.png",
    description: "O evento ocorreu no Colégio Estadual do Campo Professora Lúcia Maria Batista da Silva em Taboquinhas",
    date: "06/06/2024",
    alt: ""
  },
  {
    id: 43,
    category: "Educação",
    title: "Encontro de Egressos do Curso de Iniciação à Regência Coral e Instrumental na UESC",
    image: "./img/imagens-noticias/noticias_encontro_cantado_card.png",
    description: "I Encontro de Alunos Egressos do Curso de Iniciação à Regência Coral e Instrumental ocorreu no Auditório Paulo Souto",
    date: "07/06/2024",
    alt: ""
  },
  {
    id: 44,
    category: "Educação",
    title: "NAF-Uesc receberá certificação da Receita Federal",
    image: "./img/imagens-noticias/noticia_naf_uesc_card.png",
    description: "Evento acontecerá dia 11 de junho, em Salvador",
    date: "10/06/2024",
    alt: ""
  },
  {
    id: 45,
    category: "Educação",
    title: "Educação inclusiva é tema do VIII Simpósio de Pedagogia",
    image: "./img/imagens-noticias/noticias_simposio_de_pedagogia_card.png",
    description: "O evento aconteceu trouxe um debate amplo, de forma gratuita e aberta ao público acerca da acessibilidade e inclusão",
    date: "12/06/2024",
    alt: ""
  },
  {
    id: 46,
    category: "Educação",
    title: "PROEX Participa de Reunião com Agricultores do Assentamento João Amazonas em Uruçuca-BA",
    image: "./img/imagens-noticias/noticia_reuniao_com_agricutores_card.png",
    description: "A convite da COOPAFEBA, a Proex se reuniu com o assentamento em uma palestra sobre Certificação Participativa, ministrada pelo agroecologista Francisco Villas, além disso, foi realizado o cadastro dos assentados para inclusão em projetos governamentais",
    date: "18/06/2024",
    alt: ""
  },
  {
    id: 47,
    category: "Meio Ambiente",
    title: "Projeto Praia Limpa Realiza Ações de Limpeza em Ilhéus e Uruçuca e coletam 600 kg de resíduos sólidos",
    image: "./img/imagens-noticias/noticia_semana_do_meio_ambiente_card.png",
    description: "Como parte das comemorações da Semana do Meio Ambiente, no dia 08 de Junho, o projeto realizou duas importantes atividades de limpeza nas praias de Ilhéus e Uruçuca. Com a participação de estudantes, moradores locais e turistas, foram retirados cerca de 600 kg de resíduos sólidos das praias do Malhado e Sargi.",
    date: "18/06/2024",
    alt: ""
  },
  {
    id: 48,
    category: "Cultura",
    title: "FAEG-SUL realiza Encontro Territorial de Cultura em Santa Luzia",
    image: "./img/imagens-noticias/noticia_encontro_territorial_de_cultura_em_santa_luzia_card.png",
    description: "FAEG-SUL realiza Encontro Territorial de Cultura para formar os gestores municipais na consolidação dos Sistemas de Cultura de seus municípios",
    date: "18/06/2024",
    alt: ""
  },
  {
    id: 49,
    category: "Empreendedorismo",
    title: "E Q Play realiza mais uma edição de jogos com Estudantes de Engenharia Química da UESC",
    image: "./img/imagens-noticias/noticia_edicao_de_jogos_com_estudantes_de_engenharia_quimica_da_uesc_card.png",
    description: "Em parceria com a Veracel Celulose, o evento foi uma edição especial focada no aprendizado e inovação na indústria de papel e celulose com a imersão prática através de minicursos e palestras.",
    date: "18 de Junho de 2024",
    alt: ""
  },
  {
    id: 50,
    category: "Extensão Universitária",
    title: "Curricularização da Extensão atende a Escola Fé e Alegria no município de Ilhéus",
    image: "./img/imagens-noticias/noticia_extensao_atende_a_escola_Fe_e_alegria_card.png",
    description: "A iniciativa foi planejada a partir da integração das disciplinas Plantas Medicinais e Plantas Alimentícias Não Convencionais (PANC), ambas ministradas pela Dr.ª Larissa Costa, professora vinculada ao Departamento de Ciências Biológicas.",
    date: "10 de Julho de 2024",
    alt: ""
  },
  {
    id: 51,
    category: "Extensão Universitária",
    title: "UESC sedia o Núcleo da Escolinha de Triathlon Formando Campeões",
    image: "./img/imagens-noticias/noticia_uesc_sedia_escolinha_de_triathlon_card.png",
    description: "A Escolinha de Triathlon Formando Campeões nasceu em 2015, em Curitiba-PR, cidade natal de seu idealizador, padrinho e gestor, o triatleta olímpico Juraci Moreira, medalhista pan-americano, hexacampeão brasileiro da modalidade e três vezes representante olímpico.",
    date: "15 de Julho de 2024",
    alt: ""
  },
  {
    id: 52,
    category: "Eventos",
    title: "Ferradas Run Homenageará o autor Jorge Amado",
    image: "./img/imagens-noticias/noticia_ferradas_run_homenageara_o_autor_jorge_amado_card.jpg",
    description: "A Universidade Estadual de Santa Cruz (UESC), em parceria com a Associação dos Municípios da Região Cacaueira (AMURC), está apoiando a corrida FERRADAS RUN, que homenageia o renomado escritor Jorge Amado",
    date: "18 de Julho de 2024",
    alt: ""
  },
  {
    id: 53,
    category: "Educação",
    title: "Programa UPT/UESC realiza encontro formativo para professores e monitores",
    image: "./img/imagens-noticias/noticias_encontro_formativo_para_professores_e_monitores_card.png",
    description: "O encontro formativo reuniu professores e monitores com o objetivo de fortalecer a atuação docente crítica e emancipatória, abordando práticas pedagógicas e estratégias de preparação para os processos seletivos de ingresso ao ensino superior",
    date: "22 de Julho de 2024",
    alt: ""
  },
  {
    id: 54,
    category: "Evento",
    title: "20 anos da Lei Cultura Viva é tema do encontro territorial de cultura do FAEG-SUL",
    image: "./img/imagens-noticias/noticia_encontro_territorial_de_cultura_do_faeg_sul_card.png",
    description: "FAEG-SUL realiza encontro territorial de cultura em celebração aos 20 anos da Lei Cultura Viva.",
    date: "31 de Julho de 2024",
    alt: ""
  },
  {
    id: 55,
    category: "Educação",
    title: "Inscrições Abertas Para As Atividades Da Universidade Aberta À Terceira Idade",
    image: "./img/imagens-noticias/noticia_inscricoes_abertas_para_as_atividades_da_universidade_aberta_a_terceira_idade_card.png",
    description: "As atividades serão realizadas na modalidade presencial e podem se inscrever qualquer pessoa com idade a partir de 50 anos.",
    date: "01 de agosto de 2024",
    alt: ""
  },
  {
    id: 51,
    title: "UESC sedia o Núcleo da Escolinha de Triathlon Formando Campeões",
    image: "./img/imagens-noticias/noticia_uesc_sedia_escolinha_de_triathlon_card.png",
    description: "A Escolinha de Triathlon Formando Campeões nasceu em 2015, em Curitiba-PR, cidade natal de seu idealizador, padrinho e gestor, o triatleta olímpico Juraci Moreira, medalhista pan- americano, hexacampeão brasileiro da modalidade e três vezes representante olímpico.​",
    date: "15/07/2024",
    alt: "",
  },
];

function generateSlug(title) {
  return title.toLowerCase()
    .normalize('NFD') // Normaliza a string em decomposição de caracteres Unicode (NFD)
    .replace(/[\u0300-\u036f]/g, '') // Remove os diacríticos (acentos, cedilha, etc.)
    .replace(/[^a-z0-9]+/g, '-') // Substitui caracteres não alfanuméricos por hífens
    .replace(/^-+|-+$/g, ''); // Remove hífens no início e no fim
}

// Example of generating a slug for new news entries
news.forEach(n => {
  n.slug = generateSlug(n.title);
});

function createNewsElement(news) {
  const newsDiv = document.createElement("div");
  newsDiv.classList.add("noticia");
  newsDiv.id = news.slug;

  newsDiv.onclick = function () {
      window.location.href = `noticia.html?id=${this.id}`;
  };

const divImage = document.createElement("div");
divImage.classList.add("div-noticia-image");

const image = document.createElement("img");
image.src = news.image;
image.alt = news.alt;
divImage.appendChild(image);
newsDiv.appendChild(divImage);

  const descriptionDiv = document.createElement("div");
  descriptionDiv.classList.add("resumo-descricao");

  const titleDiv = document.createElement("div");
  titleDiv.classList.add("title-div");

  const categorySpan = document.createElement("span");
  categorySpan.classList.add("category");
  categorySpan.textContent = news.category;

  const title = document.createElement("h5");
  title.classList.add("font-weight-bold", "text-proex");
  title.textContent = news.title;
  titleDiv.appendChild(categorySpan);
  titleDiv.appendChild(title);
  descriptionDiv.appendChild(titleDiv);

const description = document.createElement("p");
description.textContent = news.description;
descriptionDiv.appendChild(description);

  const footerDiv = document.createElement("div");
  footerDiv.classList.add("footer-div");

  const date = document.createElement("span");
  date.classList.add("py-2", "text-secondary");
  date.textContent = news.date;
  titleDiv.appendChild(date);

  const shareDiv = document.createElement("div");
  shareDiv.classList.add("share-div");
  const newsLink = `${window.location.origin}/noticia.html?id=${news.slug}`;
  shareDiv.innerHTML = `
      <p>Compartilhar: </p>
      <a href="https://www.instagram.com/share?url=${encodeURIComponent(newsLink)}&text=${encodeURIComponent(news.title)}" target="_blank"><i class="fab fa-instagram fa-lg"></i></a>
      <a href="https://twitter.com/intent/tweet?url=${encodeURIComponent(newsLink)}&text=${encodeURIComponent(news.title)}" target="_blank"><i class="fab fa-twitter fa-lg"></i></a>
      <a href="https://api.whatsapp.com/send?text=${encodeURIComponent(news.title)} ${encodeURIComponent(newsLink)}" target="_blank"><i class="fab fa-whatsapp fa-lg"></i></a>
      <a href="https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(newsLink)}" target="_blank"><i class="fab fa-facebook fa-lg"></i></a>
      <a href="#" onclick="copyToClipboard('${newsLink}'); return false;"><i class="fa fa-clone fa-lg"></i></a>
  `;
  footerDiv.appendChild(shareDiv);
  descriptionDiv.appendChild(footerDiv);

  // Impede a propagação do evento de clique nos ícones de compartilhamento
  const shareLinks = shareDiv.querySelectorAll('a');
  shareLinks.forEach(link => {
    link.addEventListener('click', event => {
      event.stopPropagation();
    });
  });

  newsDiv.appendChild(descriptionDiv);
  return newsDiv;
}

function copyToClipboard(text) {
  const dummy = document.createElement("textarea");
  document.body.appendChild(dummy);
  dummy.value = text;
  dummy.select();
  document.execCommand("copy");
  document.body.removeChild(dummy);
  alert("Link copiado para a área de transferência");
}


function createDividerElement() {
  const divider = document.createElement("div");
  divider.classList.add("divider");
  return divider;
}

function showNews() {
const newsContainer = document.querySelector(".noticias-container");
newsContainer.innerHTML = "";

  let start = news.length - currentPage * 10;
  let end = 0;
  if (start < 0) {
      start = 0;
      end = start + (newsPerPage - -1 * (news.length - currentPage * 10));
  } else {
      end = start + newsPerPage;
  }
  const newsPage = news.slice(start, end);
  const newsElements = [];

  for (let i = newsPage.length - 1; i >= 0; i--) {
      const newNews = newsPage[i];
      const newsElement = createNewsElement(newNews);
      newsElements.push(newsElement);

      // Adiciona um divisor após cada notícia, exceto a última
      if (i > 0) {
          const dividerElement = createDividerElement();
          newsElements.push(dividerElement);
      }
  }

  for (const element of newsElements) {
      newsContainer.appendChild(element);
  }
}

function showSpecifNews() {
  const urlParams = new URLSearchParams(window.location.search);
  const targetSlug = urlParams.get("id"); // Alteração feita aqui para buscar "id"

const newsSection = document.getElementById("newsSection");

const children = newsSection.children;

for (let i = 0; i < children.length; i++) {
const child = children[i];
if (child.id !== targetSlug) {
  child.style.display = "none";
}
}
}

function createPagination() {
const pagination = document.querySelector(".pagination");
pagination.innerHTML = "";

const numbersPage = Math.ceil(news.length / newsPerPage);

for (let i = 1; i <= numbersPage; i++) {
const pageLink = document.createElement("a");
pageLink.href = "#";
pageLink.textContent = i;
pageLink.onclick = function () {
  currentPage = i;
  showNews();
  updatePagination();
  return false;
};

if (i === currentPage) {
  pageLink.classList.add("current-page");
}

pagination.appendChild(pageLink);
}
}

function updatePagination() {
const pagesLink = document.querySelectorAll(".pagination a");
pagesLink.forEach(function (link) {
link.classList.remove("current-page");
});

const currentLink = document.querySelector(
`.pagination a:nth-child(${currentPage})`
);
currentLink.classList.add("current-page");

const newsContainer = document.querySelector(".return-pagination");
newsContainer.scrollIntoView({ behavior: "smooth", block: "start" });
}



showNews();
createPagination();
showSpecifNews();
