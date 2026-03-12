const valorsalario = document.getElementById("valor")
const display = document.getElementById("display")
const button = document.getElementById("button")

function calcularovalordosalario {
    const valor = Number(valorsalario.value)
    const numero = (valor * 10) / 100

    if (numero <= 2000) {
        display.innerHTML = `<p>voce esta isento </p>`
    } else if (numero >= 2001 && numero <= 4999) {

    }
}
button.addEventListener("click", calcularovalordosalario)