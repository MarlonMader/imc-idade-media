function media() {
let nome = document.querySelector("#nome");
let nota1 = document.querySelector("#nota1");
let nota2 = document.querySelector("#nota2");
let nota3 = document.querySelector("#nota3");
let nota4 = document.querySelector("#nota4");
let campo = document.querySelector("#campo");

let media = (Number.parseFloat(nota1.value) + Number.parseFloat(nota2.value) + Number.parseFloat(nota3.value) + Number.parseFloat(nota4.value)) / 4;
    if (media >= 7) {
        campo.innerHTML += `<p> ${nome.value}, sua média é: ${media} você está aprovado!!</p>`
    } else if (media >= 4.5) {
        campo.innerHTML += `<p> ${nome.value}, sua média é: ${media} você está em exame!!</p>`
    } else if (media < 4.5) {
        campo.innerHTML += `<p> ${nome.value}, sua média é: ${media} você está reprovado!!</p>`
    }
}