var campoFiltro = document.querySelector("#filtrar-tabela");

campoFiltro.addEventListener("input", function() {

    var pacientes = document.querySelectorAll(".paciente");

    if (!this.value.length > 0) {
        pacientes.forEach(function (paciente) {
            paciente.classList.remove("invisivel");
        });
        return;
    }
    pacientes.forEach(function (paciente) {

        var tdNome = paciente.querySelector(".info-nome");
        var nome = tdNome.textContent;

        /*-Espressao regular */
        var expressao = new RegExp(campoFiltro.value, "i");

        /*Testando expressao regular no nome*/
        if (!expressao.test(nome)) paciente.classList.add("invisivel");
        else paciente.classList.remove("invisivel");
    });
});