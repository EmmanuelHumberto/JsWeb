import {validaPaciente} from "./form/criaTabelaPacientes.js";
import {capturaPacienteFormulario} from "./form/capturaPacienteFormulario.js";
import {adicionaPacienteNaTabela} from "./adicionaPacienteNaTabela.js";


/*Botão*/
var botaoAdicionar = document.querySelector("#adicionar-paciente");

/*#######################################################################*/

/*Add escutador de click*/
botaoAdicionar.addEventListener("click", function(event) {

    /*#######################################################################*/
    /*previvir comportamento padrão */
    event.preventDefault();
    var form = document.querySelector("#form-add");

    /*-Extraindo dados do paciente no form*/
    var paciente = capturaPacienteFormulario(form);

    /*-Add dados do paciente na tabela*/
    adicionaPacienteNaTabela(paciente);

    var erro = validaPaciente(paciente);
    if(erro.length > 0) {
        exibeMsgErro(erro);
        return;
    }

    /*Limpando formulário*/
    form.reset();

    var mensagensErro = document.querySelector("#msg-erro");
    mensagensErro.innerHTML = "";
    /*#######################################################################*/
});
function  exibeMsgErro(erros){

    var ul = document.querySelector("#msg-erro");
    ul.innerHTML = "";
    erros.forEach(function (erro){
        var li = document.createElement("li")
        li.textContent = erro;
        ul.appendChild(li);
    });
}

