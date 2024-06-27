$(document).ready(function() {
    // Add 'dashboards' class to the main article if it matches any dashboard titles
    var dashboards = ["Visão Geral", "Graduação", "Pós-Graduação", "Extensão", "Servidores", "Egressos", "Programa de Iniciação à Pesquisa", "Assistência Estudantil", "Indicadores de Gestão", "Avaliação Institucional", "Prototipo", "Apresentação", "Apresentação 2", "UFG Sustentável", "Internacionalização", "SEI-UFG", "Protótipo Novo Layout", "Segurança", "Estágio", "Inclusão"];
    if (jQuery.inArray(jQuery("#content article.page-show header h1").text(), dashboards) !== -1) {
      jQuery("#content article.page-show").addClass("dashboards");
    }
    if (jQuery("#content article.page-show header h1").text() == "Visão Geral") {
      jQuery("#content .page-show").addClass("visao_geral");
    }
    if (jQuery("#content article.page-show header h1").text() == "Extensão") {
      jQuery("#content .page-show").addClass("extensao");
    }
    if (jQuery("#content article.page-show header h1").text() == "Protótipo Novo Layout") {
      jQuery("#content .page-show").addClass("prototipo_novo");
    }
  
    // Add 'relatorios' class if it's a relatorio page
    var relatorios = ["Relatórios Dinâmicos"];
    if (jQuery.inArray(jQuery("#content article.page-show header h1").text(), relatorios) !== -1) {
      jQuery("#content article.page-show").addClass("relatorios");
      jQuery("#content .container").addClass("container_relatorios");
    }
  });

  $(document).ready(function() {
    $('.painel').on('click', function(e) {
      e.preventDefault();
      var target = $($(this).data('target'));
      var placeholder = $(this).next('.panel-placeholder');
  
      if (target.is(':visible')) {
        target.hide().removeClass('active');
        placeholder.removeClass('active');
      } else {
        // Esconde todas as seções e placeholders
        $('.panel-section').hide().removeClass('active');
        $('.panel-placeholder').removeClass('active');
  
        // Mostra a seção correspondente
        target.show().addClass('active');
  
        // Se for mobile, mover a seção para o placeholder
        if ($(window).width() <= 768) {
          placeholder.html(target).addClass('active');
        } else {
          // Se for desktop, manter a seção no lugar original
          target.appendTo(target.parent());
        }
      }
    });
  });
  
  
  
  
  