export function criaTabelaPaciente(paciente){

    /*Cria elemento tr*/
    var pacienteTr = document.createElement("tr");

    /*Cria elementos td*/
    var nomeTd = document.createElement("td");
    var pesoTd = document.createElement("td");
    var alturaTd = document.createElement("td");
    var gorduraTd = document.createElement("td");
    var imcTd = document.createElement("td");

    /*-Atribui valor aos elementos criados*/
    nomeTd.textContent = paciente.nome;
    pesoTd.textContent = paciente.peso;
    alturaTd.textContent = paciente.altura;
    gorduraTd.textContent = paciente.gordura;
    imcTd.textContent = paciente.imc;

    /*Colocando elementos td dentro de tr*/
    pacienteTr.appendChild(nomeTd);
    pacienteTr.appendChild(pesoTd);
    pacienteTr.appendChild(alturaTd);
    pacienteTr.appendChild(gorduraTd);
    pacienteTr.appendChild(imcTd);

    /*Colocando tr dentro de tbody*/
    var tabela = document.querySelector(".tabela-pacientes");
    tabela.appendChild(pacienteTr);

    return paciente;
}