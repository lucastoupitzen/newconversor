function calcDistancia() {
    var numinicial = document.querySelector("#nunentrada").value
    var unitEntrada = document.querySelector("#selecunitinicio").value
    var unitSaida = document.querySelector("#selecunitfinal").value
    var output = document.querySelector(".output")
    calculadoradistancia(numinicial,unitEntrada,unitSaida,output)
}
function calculadoradistancia(numinicial,unitEntrada,unitSaida,output) {
    let memoria = {
        "metro": 1,
        "quilômetro": 1000,
        "centímetro": 0.01,
        "milímetro": 0.001,
        "jarda": 0.9144,
        "pé": 0.3048,
        "milha": 1609.34,
    }
    if ((unitEntrada && unitSaida) in memoria && numinicial != "") {
        resultado = (numinicial * memoria[unitEntrada])/(memoria[unitSaida])
        output.innerHTML = `${numinicial} ${conferedist(numinicial,unitEntrada)} são ${resultado} ${conferedist(resultado,unitSaida)}`
    }
}
function conferedist(num, unidade) {
    if (num == 1) {
        return unidade
    } else {
            return `${unidade}s`
    }
}
