function calcPressao() {
    var numinicial = document.querySelector("#nunentrada").value
    var unitEntrada = document.querySelector("#selecunitinicio").value
    var unitSaida = document.querySelector("#selecunitfinal").value
    var output = document.querySelector(".output")
    calculadorapressao(numinicial,unitEntrada,unitSaida,output)
}
function calculadorapressao(numinicial,unitEntrada,unitSaida,output) {
    var memoria = {
        "atm": 1,
        "Pascal": 9.8692e-6,
        "psi": 0.068046,
        "torr": 0.00131579,
        "bar": 0.986923,
    }
    if ((unitEntrada && unitSaida) in memoria && numinicial != "") {
        resultado = (numinicial * memoria[unitEntrada])/(memoria[unitSaida])
        output.innerHTML = `${numinicial} ${conferepressao(numinicial,unitEntrada)} são ${resultado} ${conferepressao(resultado,unitSaida)}`
    }
}
function conferepressao(num, unidade) {
    if (num == 1) {
        return unidade
    } else {
            return `${unidade}`
    }
}
