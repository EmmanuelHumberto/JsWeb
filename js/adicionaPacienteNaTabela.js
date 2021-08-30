import {criaTabelaPaciente} from "./form/criaTabelaPacientes.js";

export function adicionaPacienteNaTabela(paciente){
    var paciente;

    /*-Cria os elementos e tr e td*/
    var pacienteTr = criaTabelaPaciente(paciente);

    /*-Colocando tr dentro de tbody */
    var tabela = document.querySelector(".tabela-pacientes");
    tabela.appendChild(pacienteTr);
}