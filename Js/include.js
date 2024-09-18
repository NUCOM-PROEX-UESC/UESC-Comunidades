function includeHTML() {
    localStorage.clear()
    var header = new XMLHttpRequest();
    // var head = new XMLHttpRequest();
    var footer = new XMLHttpRequest();
  
    header.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {
        document.getElementById("header").innerHTML = this.responseText;
      }
    };
  
    // head.onreadystatechange = function () {
    //   if (this.readyState == 4 && this.status == 200) {
    //     document.getElementById("head").innerHTML = this.responseText;
    //   }
    // };
  
    footer.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {
        document.getElementById("footer").innerHTML = this.responseText;
      }
    };
  
    header.open("GET", "./header.html", true);
    header.send();
  
    // head.open("GET", "head.html", true);
    // head.send();
  
    footer.open("GET", "./footer.html", true);
    footer.send();
  }
  
  includeHTML();
  
  //Adicionando TABELAS EM BOLSAS(Gabriel de Souza)

  document.addEventListener("DOMContentLoaded", function() {
    function toggleTables() {
        const largeTable = document.querySelector('.large-table');
        const smallTable = document.querySelector('.small-table');
        
        if (window.innerWidth <= 1240) {
            largeTable.style.display = 'none';
            smallTable.style.display = 'table';
        } else {
            largeTable.style.display = 'table';
            smallTable.style.display = 'none';
        }
    }

    // Aplica a transformação na inicialização
    toggleTables();

    // Aplica a transformação novamente se a tela for redimensionada
    window.addEventListener('resize', toggleTables);
});

  
  

