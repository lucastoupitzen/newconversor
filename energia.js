function calcEnergia() {
    var numinicial = document.querySelector("#nunentrada").value
    var unitEntrada = document.querySelector("#selecunitinicio").value
    var unitSaida = document.querySelector("#selecunitfinal").value
    var output = document.querySelector(".output")
    calculadoraenergia(numinicial,unitEntrada,unitSaida,output)
}
function calculadoraenergia(numinicial,unitEntrada,unitSaida,output) {
    var memoria = {
        "joule": 1,
        "quilojoule": 1000,
        "caloria": 4.184,
        "quilocaloria": 4184,
        "elétron-volt": 1.602182863156e-19,
        "BTU": 1055.06, 
        "quilowatt-hora": 3.6e+6,
    }
    if ((unitEntrada && unitSaida) in memoria && numinicial != "") {
        resultado = (numinicial * memoria[unitEntrada])/(memoria[unitSaida])
        output.innerHTML = `${numinicial} ${confereenergia(numinicial,unitEntrada)} são ${resultado} ${confereenergia(resultado,unitSaida)}`
    }
}
function confereenergia(num, unidade) {
    if (num == 1) {
        return unidade
    } else {
        if (unidade == "quilowatt-hora") {
            return "quilowatts-hora"
        } else {
            return `${unidade}s`
        }
    }
}

