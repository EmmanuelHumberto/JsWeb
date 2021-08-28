var tabela = document.querySelector("table");

tabela.addEventListener("dblclick", function (event) {

    var alvoEvento =   event.target;
    var paiEvento = alvoEvento.parentNode;
    paiEvento.classList.add("fadeOut");

    setTimeout(function () {
        paiEvento.remove();
        alert("Paciente Removido!");
    }, 500);
});

