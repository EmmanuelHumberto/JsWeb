import {adicionaPacienteNaTabela} from "./adicionaPacienteNaTabela.js";

var botaoAdicionar = document.querySelector("#buscar-pacientes");

botaoAdicionar.addEventListener("click", function() {

    /*-XMLHttpRequest é um objeto que fornece funcionalidade ao cliente para
    transferir dados entre um cliente e um servidor*/
    var xhr = new XMLHttpRequest();

    /*-O open()método cria uma nova janela secundária do navegador, semelhante a
    escolher Nova janela no menu Arquivo. O urlparâmetro especifica o URL a ser
    obtido e carregado na nova janela.*/
    xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes");

    /*-O evento de load é acionado quando um recurso e seus recursos
    dependentes terminaram de carregar.*/
    xhr.addEventListener("load", function() {


        /*A statuspropriedade somente leitura da Responseinterface contém o
        código de status da resposta (por exemplo, 200para sucesso).*/
        if(xhr.status === 200) {

            /*-A XMLHttpRequestpropriedade somente leitura responseText retorna o texto
       recebido de um servidor após o envio de uma solicitação.*/
            var resposta = xhr.responseText;
            console.log(resposta);
            /*-typeof retorna uma string indicando o tipo de um operando.*/
            console.log(typeof resposta);

            /*O método JSON.parse() analisa uma string JSON, construindo o
            valor ou um objeto JavaScript descrito pela string. Uma função
            reviver opcional pode ser fornecida para executar uma transformação
            no objeto resultante antes de ser retornada.*/
            var pacientes = JSON.parse(resposta);

            pacientes.forEach(function (paciente) {
                adicionaPacienteNaTabela(paciente);
            });
        }else {
            console.log(xhr.status);
            console.log(xhr.responseText);
            var erroAjax = document.querySelector("#erro-ajax");
            erroAjax.classList.remove("invisivel")
        }

    });
    /*O método send(), do XMLHttpRequest, envia uma requisição para o servidor.
    Se a solicitação for assíncrona (que é o padrão), esse método retornará assim
    que a solicitação for enviada e o resultado for entregue usando eventos.
    Se a solicitação for síncrona, esse método não retornará até que a resposta chegue.*/
    xhr.send();
});