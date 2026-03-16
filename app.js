const valorsalario = document.getElementById("valor")
const display = document.getElementById("display")
const button = document.getElementById("button")

function calcularovalordosalario() {
    const valor = Number(valorsalario.value)

    if (valor <= 2000) {
        display.innerHTML = `<p> Você esta isento </p>`
    }else if (valor > 2000 && valor <= 3500) {
       const imposto = valor* 7.5 /100 
       display.innerHTML = `<p> O valor do imposto é ${imposto}</p>` 
        `<p>O salário informado foi ${valor}</p>`
    }else if (valor > 3500 && valor <= 5000) {
        const imposto = valor* 15 /100 
        display.innerHTML = `<p> O valor do imposto é ${imposto}</p>`
        `<p> O salário informado foi ${valor}</p>`
    }else{
        const imposto = valor* 22.5/100
        display.innerHTML = `<p> O valor do imposto é ${imposto}</p>`
        `<p> O salário informado foi ${valor}</p>`
    }

}
button.addEventListener("click", calcularovalordosalario)