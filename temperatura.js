function calcTemperatura() {
    var numinicial = document.querySelector("#nunentrada").value
    var unitEntrada = document.querySelector("#selecunitinicio").value
    var unitSaida = document.querySelector("#selecunitfinal").value
    var output = document.querySelector(".output")
    calculadoratemperatura(numinicial,unitEntrada,unitSaida,output)
}
function calculadoratemperatura(numinicial,unitEntrada,unitSaida,output) {
    var memoria = {
        "ºC": [0,100],
        "ºF": [32,212],
        "K": [273,373],
    }
    if ((unitEntrada && unitSaida) in memoria && numinicial != "") {
        resultado = ((numinicial - memoria[unitEntrada][0])*(memoria[unitSaida][1]-memoria[unitSaida][0])/(memoria[unitEntrada][1] - memoria[unitEntrada][0])) + memoria[unitSaida][0]
        output.innerHTML = `${numinicial} ${conferetemperatura(numinicial,unitEntrada)} são ${resultado} ${conferetemperatura(resultado,unitSaida)}`
    }
}
function conferetemperatura(num, unidade) {
    if (num == 1) {
        return unidade
    } else {
            return `${unidade}`
    }
}