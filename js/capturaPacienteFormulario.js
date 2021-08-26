import {calculaImc} from "./calcImc.js";

export function capturaPacienteFormulario(form){

    var paciente = {
        nome: form.nome.value,
        peso:  form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaImc(form.peso.value, form.altura.value)

    }
    return paciente;
}
