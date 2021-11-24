function calcVolume() {
    var numinicial = document.querySelector("#nunentrada").value
    var unitEntrada = document.querySelector("#selecunitinicio").value
    var unitSaida = document.querySelector("#selecunitfinal").value
    var output = document.querySelector(".output")
    calculadoravolume(numinicial,unitEntrada,unitSaida,output)
}
function calculadoravolume(numinicial,unitEntrada,unitSaida,output) {
    let memoria = {
        "litro": 1,
        "m³": 1000,
        "galão americano": 3.78541,
        "mililitro": 0.001,
        "pé cúbico": 28.3168,
        "polegada cúbica": 0.0163871,
        "fl. Oz": 0.0284130625,
    }
    if ((unitEntrada && unitSaida) in memoria && numinicial != "") {
        resultado = (numinicial * memoria[unitEntrada])/(memoria[unitSaida])
        output.innerHTML = `${numinicial} ${conferevol(numinicial,unitEntrada)} são ${resultado} ${conferevol(resultado,unitSaida)}`
    }
}
function conferevol(num, unidade) {
    if (num == 1) {
        return unidade
    } else {
        if (unidade == "galão americano") {
            return "galões americanos"
        } else if (unidade == "pé cúbico") {
            return "pés cúbicos"
        } else if (unidade == "polegada cúbica") {
            return "polegadas cúbicas"
        } else {
            return `${unidade}s`
        }
    }
}

