function calcMassa() {
    var numinicial = document.querySelector("#nunentrada").value
    var unitEntrada = document.querySelector("#selecunitinicio").value
    var unitSaida = document.querySelector("#selecunitfinal").value
    var output = document.querySelector(".output")
    calculadoramassa(numinicial,unitEntrada,unitSaida,output)
}
function calculadoramassa(numinicial,unitEntrada,unitSaida,output) {
    var memoria = {
        "grama": 1,
        "quilograma": 1000,
        "tonelada": 1000000,
        "miligrama": 0.001,
        "libra": 453.592,
        "onça": 28.3495,    
    }
    if ((unitEntrada && unitSaida) in memoria && numinicial != "") {
        resultado = (numinicial * memoria[unitEntrada])/(memoria[unitSaida])
        output.innerHTML = `${numinicial} ${conferemassa(numinicial,unitEntrada)} são ${resultado} ${conferemassa(resultado,unitSaida)}`
    }
}
function conferemassa(num, unidade) {
    if (num == 1) {
        return unidade
    } else {
            return `${unidade}s`
    }
}
