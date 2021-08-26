export function criaTabelaPaciente(paciente){

    /*-Cria elemento tr e class */
    var pacienteTr = document.createElement("tr");
    pacienteTr.classList.add("paciente");

    /*-Cria elementos td e classes */
    var nomeTd = montaColunaTabela('paciente.nome', 'info-nome');
    var pesoTd = montaColunaTabela('paciente.peso', 'info-peso');
    var alturaTd = montaColunaTabela('paciente.altura', 'info-altura');
    var gorduraTd = montaColunaTabela('paciente.gordura', 'info-gordura');
    var imcTd = montaColunaTabela('paciente.imc', 'info-imc');

    /*-Atribuindo valor as td's */
    nomeTd.textContent = paciente.nome;
    pesoTd.textContent = paciente.peso;
    alturaTd.textContent = paciente.altura;
    gorduraTd.textContent = paciente.gordura;
    imcTd.textContent = paciente.imc;

    /*-Colocando elementos td dentro de tr */
    pacienteTr.appendChild(nomeTd);
    pacienteTr.appendChild(pesoTd);
    pacienteTr.appendChild(alturaTd);
    pacienteTr.appendChild(gorduraTd);
    pacienteTr.appendChild(imcTd);

    /*-Colocando tr dentro de tbody */
    var tabela = document.querySelector(".tabela-pacientes");
    tabela.appendChild(pacienteTr);

    return pacienteTr;
}

function  montaColunaTabela(dado, classe){
    var td = document.createElement("td");
    td.textContent = dado;
    td.classList.add(classe);
    return td;
}