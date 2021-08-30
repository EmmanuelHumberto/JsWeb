var tabela = document.querySelector("table");

tabela.addEventListener("dblclick", function (event) {

    /*Uma referência ao objeto que enviou o evento.
     propriedade event.target pode ser usada para
     implementar a delegação de eventos.*/
    var alvoEvento =   event.target;

    /*é uma propriedade DOM somente leitura que retorna
    o nó (node) parente de um Node referenciado na árvore DOM.*/
    var paiEvento = alvoEvento.parentNode;

    /*-fadeOut: oculta os elementos correspondentes, tornando-os transparentes*/
    paiEvento.classList.add("fadeOut");

    setTimeout(function () {
        paiEvento.remove();
        alert("Paciente Removido!");
    }, 500);
});

