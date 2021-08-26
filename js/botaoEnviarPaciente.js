import {criaTabelaPaciente, validaPaciente} from "./criaTabelaPacientes.js";
import {capturaPacienteFormulario} from "./capturaPacienteFormulario.js";

/*Botão*/
var botaoAdicionar = document.querySelector("#adicionar-paciente");
/*Add escutador de click*/
botaoAdicionar.addEventListener("click", function(event) {
    /*previvir comportamento padrão */
    event.preventDefault();

    var form = document.querySelector("#form-add");

    /*-Extraindo dados do paciente no form*/
    var paciente = capturaPacienteFormulario(form);

    /*-Cria os elementos e tr e td*/
    var pacienteTr = criaTabelaPaciente(paciente);

    if(!validaPaciente(paciente)) {
        console.log("Paciente Invalido");
        return;
    }

    /*-Colocando tr dentro de tbody */
    var tabela = document.querySelector(".tabela-pacientes");
    tabela.appendChild(pacienteTr);

    /*Limpando formulário*/
    form.reset();
});

