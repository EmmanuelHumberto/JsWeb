import {validaAltura, validaPeso} from "../calcImc.js";

export function criaTabelaPaciente(paciente) {

    /*-Cria elemento tr e class */
    var pacienteTr = document.createElement("tr");
    pacienteTr.classList.add("paciente");

    /*-Colocando elementos td dentro de tr e criando as td e class*/
    pacienteTr.appendChild(montaColunaTabela(paciente.nome, 'info-nome'));
    pacienteTr.appendChild(montaColunaTabela(paciente.peso, 'info-peso'));
    pacienteTr.appendChild(montaColunaTabela(paciente.altura, 'info-altura'));
    pacienteTr.appendChild(montaColunaTabela(paciente.gordura, 'info-gordura'));
    pacienteTr.appendChild(montaColunaTabela(paciente.imc, 'info-imc'));

    return pacienteTr;
}

function  montaColunaTabela(dado, classe) {
    var td = document.createElement("td");
    td.textContent = dado;
    td.classList.add(classe);
    return td;
}

export function validaPaciente(paciente){

    var erros = [];
    if (paciente.nome.length === 0) erros.push("Campo nome é obrigatório");
    if (paciente.gordura.length === 0) erros.push("Campo gordura é obrigatório");
    if (paciente.peso.length ===0 ) erros.push("Campo peso é obrigatório");
    if (paciente.altura.length === 0) erros.push("Campo altura é obrigatório");
    if (!validaPeso(paciente.peso)) erros.push("Peso é inválido");
    if (!validaAltura(paciente.altura)) erros.push("Altura é inválida");
    return erros;
}
