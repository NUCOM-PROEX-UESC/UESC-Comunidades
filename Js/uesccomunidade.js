document.addEventListener('DOMContentLoaded', function() {
    // Função para mostrar o projeto específico com base no parâmetro da URL
    function mostrarProjeto() {
        // Obtém o parâmetro 'projeto' da URL
        const urlParams = new URLSearchParams(window.location.search);
        const projeto = urlParams.get('projeto');

        // Oculta todos os projetos
        const projetos = document.querySelectorAll('.corpo_projeto');
        projetos.forEach(projeto => {
            projeto.style.display = 'none';
        });

        // Mostra apenas o projeto específico
        const projetoEspecifico = document.querySelector(`.corpo_projeto.${projeto}`);
        if (projetoEspecifico) {
            projetoEspecifico.style.display = 'block';
        } else {
            // Caso o projeto específico não seja encontrado, exibe uma mensagem de erro
            console.error('Projeto não encontrado:', projeto);
        }
    }

    // Chama a função mostrarProjeto após o carregamento completo da página
    mostrarProjeto();
});
