var pacientes = document.querySelectorAll(".paciente");
for (var i = 0; i < pacientes.length ; i++) {

    var paciente = pacientes[i];
    var tdPeso = paciente.querySelector(".info-peso");
    var peso = tdPeso.textContent;
    var tdAltura = paciente.querySelector(".info-altura");
    var altura = tdAltura.textContent;
    var tdImc = paciente.querySelector(".info-imc");

    var alturaEhValida = validaAltura(altura);
    var pesoEhValido = validaPeso(peso);

    if (!pesoEhValido) {
        pesoEhValido = false;
        console.log("Peso inválido!");
        tdPeso.textContent = "Peso inválido!";
        paciente.classList.add("paciente-invalido");
    }

    if (!alturaEhValida) {
        pesoEhValido = false;
        console.log("Altura inválida!");
        tdAltura.textContent = "Altura inválida!";
        paciente.classList.add("paciente-invalido");
    }

    if (alturaEhValida && pesoEhValido) {
        var imc = peso / (altura * altura);
        tdImc.textContent = imc;
    }
}

export function validaPeso(peso){
    if(peso > 0 && peso < 1000){
        return true;
    }
    else{
        return  false;
    }
}

export function validaAltura(){

    if(altura > 0 && altura < 3){
        return true;
    }
    else{
        return  false;
    }
}

export function calculaImc(peso, altura){
   var imc = 0;
   imc = peso / (altura**2);
   return imc.toFixed(2);
}
