function idade() {
    let nome = document.querySelector("#nome");
    let anodenascimento = document.querySelector("#anodenascimento").value;
    let Anoatual = new Date().getFullYear();
    let campo = document.querySelector("#campo");
    let idade = Anoatual - Number.parseFloat(anodenascimento);

    if (idade < 12) {
        campo.innerHTML += `<p> ${nome.value}, sua idade é: ${idade} você ainda é Criança <p>`;
    } else if (idade < 18) {
        campo.innerHTML += `<p> ${nome.value}, sua idade é: ${idade} você é jovem <p>`;
    } else if (idade < 65) {
        campo.innerHTML += `<p> ${nome.value}, sua idade é: ${idade} você é um adulto <p>`;
    } else if (idade > 65) {
        campo.innerHTML += `<p> ${nome.value}, sua idade é: ${idade} você é um idoso <p>`;
    }
}