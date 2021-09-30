function calculoIMC() {
let nome = document.querySelector("#nome");
let altura = document.querySelector("#altura");
let peso = document.querySelector("#peso");
let campo = document.querySelector("#campo");

    let imc = Number.parseFloat(peso.value) / (Number.parseFloat(altura.value) * Number.parseFloat(altura.value));
    if (imc < 18.5) {
        campo.innerHTML += `<p> ${nome.value}, seu IMC é: ${imc.toFixed(2)} e você está abaixo do peso ideal!</p>`
    } else if (imc >= 18.5 && imc <= 24.9) {
        campo.innerHTML += `<p> ${nome.value}, seu IMC é: ${imc.toFixed(2)} e você está no peso ideal!</p>`
    } else if (imc >= 25 && imc <= 29.9) {
        campo.innerHTML += `<p> ${nome.value}, seu IMC é: ${imc.toFixed(2)} e você está em sobrepeso (obesidade grau 1)!</p>`
    } else if (imc >= 30 && imc <= 39.9) {
        campo.innerHTML += `<p> ${nome.value}, seu IMC é: ${imc.toFixed(2)} e você está com obesidade (obesidade grau 2)!</p>`
    } else if (imc >= 40) {
        campo.innerHTML += `<p> ${nome.value}, seu IMC é: ${imc.toFixed(2)} e você está com obesidade grave (obesidade grau 3)!</p>`
    }
}