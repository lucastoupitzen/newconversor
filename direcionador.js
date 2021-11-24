function interpretador() {
    // chama a funcao direcao que passará a página massa por padrão
    direcao()
    // aguarda o clique do usuário para guiar à interface desejada
    const massaDoc = document.getElementById("massa")
    massaDoc.addEventListener("click",direcaoMassa)
    const volumeDoc = document.getElementById("volume")
    volumeDoc.addEventListener('click',direcVol)
    const distanciaDoc = document.getElementById("distancia")
    distanciaDoc.addEventListener('click',direcDist)
    const energiaDoc = document.getElementById("energia")
    energiaDoc.addEventListener("click",direcEnerg)
    const pressaoDoc = document.getElementById("pressao")
    pressaoDoc.addEventListener("click",direcPressao)
    const temperaturaDoc = document.getElementById("temperatura")
    temperaturaDoc.addEventListener("click",direcTemp)
    function direcaoMassa() {
        direcao(massa = true)
    }
    function direcVol() {
        direcao(massa=false, volume=true)
    }
    function direcDist() {
        direcao(massa=false,volume = false, distancia=true)
    }
    function direcEnerg() {
        direcao(massa=false, volume=false, distancia=false, energia=true)
    }
    function direcPressao() {
        direcao(massa=false,volume=false, distancia=false, energia=false, pressao=true)
    }
    function direcTemp() {
        direcao(massa=false,volume=false, distancia=false, energia=false, pressao=false, temperatura=true)
    }
}
function direcao(massa = true, volume = false, distancia = false,energia = false, pressao = false, temperatura = false) {
    const lista = [massa,volume,distancia,energia,pressao,temperatura]
    controle = false
    memoria = 0
    for (i = 0; controle == false; i++) {
        if (lista[i] == true) {
            memoria = i
            controle = true
        }
    }
    switch (memoria) {
        case 0:
            layoutMassa()
            break
        case 1:
            layoutVolume()
            break
        case 2:
            layoutDistancia()
            break
        case 3:
            layoutEnergia()
            break
        case 4:
            layoutPressao()
            break
        case 5:
            layoutTemperatura()
            break
        default: null
    }
}
function layoutMassa() {
    var output = document.querySelector(".output")
    output.innerHTML = "Aguardando a seleção de dados..."
    document.querySelector("#nunentrada").value = ''
    var titulo = document.getElementById("titulo")
    titulo.innerHTML = 'Conversor de Massa'
    var select = document.getElementById("selecunitinicio")
    select.innerHTML = '<option value="#"></option><option value="grama">Grama (g)</option><option value="quilograma">Quilograma (kg)</option><option value="tonelada">Tonelada (t)</option><option value="miligrama">Miligrama (mg)</option><option value="libra">Libra (lb)</option><option value="onça">Onça (oz)</option>'
    var selectfim = document.getElementById("selecunitfinal")
    selectfim.innerHTML = '<option value="#"></option><option value="grama">Grama (g)</option><option value="quilograma">Quilograma (kg)</option><option value="tonelada">Tonelada (t)</option><option value="miligrama">Miligrama (mg)</option><option value="libra">Libra (lb)</option><option value="onça">Onça (oz)</option>'
    var bot = document.querySelector(".botao")
    bot.innerHTML = '<input type="button" onclick = "calcMassa()" value="Converter"> '
}
function layoutVolume() {
    var output = document.querySelector(".output")
    output.innerHTML = "Aguardando a seleção de dados..."
    document.querySelector("#nunentrada").value = ''
    var numinicial = document.querySelector("#nunentrada").value
    numinicial.innerHTML = ""
    var titulo = document.getElementById("titulo")
    titulo.innerHTML = "Conversor de Volume"
    var select = document.getElementById("selecunitinicio")
    select.innerHTML = '<option value="#"></option><option value="litro">Litro (l)</option><option value="m³">m³</option><option value="mililitro">Mililitro (ml)</option><option value="galão americano">Galão americano (gal)</option><option value="pé cúbico">Pé cúbico (ft³)</option><option value="polegada cúbica">Polegada cúbica (in³)</option><option value="fl. Oz">fl. Oz</option>'
    var selectfim = document.getElementById("selecunitfinal")
    selectfim.innerHTML = '<option value="#"></option><option value="litro">Litro (l)</option><option value="m³">m³</option><option value="mililitro">Mililitro (ml)</option><option value="galão americano">Galão americano (gal)</option><option value="pé cúbico">Pé cúbico (ft³)</option><option value="polegada cúbica">Polegada cúbica (in³)</option><option value="fl. Oz">fl. Oz</option>'
    var bot = document.querySelector(".botao")
    bot.innerHTML = '<input type="button" onclick = "calcVolume()" value="Converter"> '
}
function layoutDistancia() {
    var output = document.querySelector(".output")
    output.innerHTML = "Aguardando a seleção de dados..."
    document.querySelector("#nunentrada").value = ''
    var titulo = document.getElementById("titulo")
    titulo.innerHTML = 'Conversor de Distância'
    var select = document.getElementById("selecunitinicio")
    select.innerHTML = '<option value="#"></option><option value="metro">Metro (m)</option><option value="quilômetro">Quilômetro (km)</option><option value="centímetro">Centímetro (cm)</option><option value="milímetro">Milímetro (mm)</option><option value="jarda">Jarda (yd)</option><option value="pé">Pé (ft)</option><option value="milha">Milha (mi)</option>'
    var selectfim = document.getElementById("selecunitfinal")
    selectfim.innerHTML = '<option value="#"></option><option value="metro">Metro (m)</option><option value="quilômetro">Quilômetro (km)</option><option value="centímetro">Centímetro (cm)</option><option value="milímetro">Milímetro (mm)</option><option value="jarda">Jarda (yd)</option><option value="pé">Pé (ft)</option><option value="milha">Milha (mi)</option>'
    var bot = document.querySelector(".botao")
    bot.innerHTML = '<input type="button" onclick = "calcDistancia()" value="Converter"> '
}
function layoutEnergia() {
    var output = document.querySelector(".output")
    output.innerHTML = "Aguardando a seleção de dados..."
    document.querySelector("#nunentrada").value = ''
    var numinicial = document.querySelector("#nunentrada").value
    numinicial.innerHTML = ""
    var titulo = document.getElementById("titulo")
    titulo.innerHTML = "Conversor de Energia"
    var select = document.getElementById("selecunitinicio")
    select.innerHTML = '<option value="#"></option><option value="joule">Joule (J)</option><option value="quilojoule">Quilojoule (kJ)</option><option value="caloria">Caloria (cal)</option><option value="quilocaloria">Quilocaloria (Kcal)</option><option value="elétron-volt">Elétron-Volt (eV)</option><option value="BTU">BTU</option><option value="quilowatt-hora">Quilowatt-hora (kWh)</option>'
    var selectfim = document.getElementById("selecunitfinal")
    selectfim.innerHTML = '<option value="#"></option><option value="joule">Joule (J)</option><option value="quilojoule">Quilojoule (kJ)</option><option value="caloria">Caloria (cal)</option><option value="quilocaloria">Quilocaloria (Kcal)</option><option value="elétron-volt">Elétron-Volt (eV)</option><option value="BTU">BTU</option><option value="quilowatt-hora">Quilowatt-hora (kWh)</option>'
    var bot = document.querySelector(".botao")
    bot.innerHTML = '<input type="button" onclick = "calcEnergia()" value="Converter"> '
}
function layoutPressao() {
    var output = document.querySelector(".output")
    output.innerHTML = "Aguardando a seleção de dados..."
    document.querySelector("#nunentrada").value = ''
    var numinicial = document.querySelector("#nunentrada").value
    numinicial.innerHTML = ""
    var titulo = document.getElementById("titulo")
    titulo.innerHTML = "Conversor de Pressão"
    var select = document.getElementById("selecunitinicio")
    select.innerHTML = '<option value="#"></option><option value="atm">atm</option><option value="Pascal">Pascal</option><option value="psi">psi</option><option value="torr">torr</option><option value="bar">bar</option>'
    var selectfim = document.getElementById("selecunitfinal")
    selectfim.innerHTML = '<option value="#"></option><option value="atm">atm</option><option value="Pascal">Pascal</option><option value="psi">psi</option><option value="torr">torr</option><option value="bar">bar</option>'
    var bot = document.querySelector(".botao")
    bot.innerHTML = '<input type="button" onclick = "calcPressao()" value="Converter"> '
}
function layoutTemperatura() {
    var output = document.querySelector(".output")
    output.innerHTML = "Aguardando a seleção de dados..."
    document.querySelector("#nunentrada").value = ''
    var numinicial = document.querySelector("#nunentrada").value
    numinicial.innerHTML = ""
    var titulo = document.getElementById("titulo")
    titulo.innerHTML = "Conversor de Temperatura"
    var select = document.getElementById("selecunitinicio")
    select.innerHTML = '<option value="#"></option><option value="ºC">ºC</option><option value="ºF">ºF</option><option value="K">K</option>'
    var selectfim = document.getElementById("selecunitfinal")
    selectfim.innerHTML = '<option value="#"></option><option value="ºC">ºC</option><option value="ºF">ºF</option><option value="K">K</option>'
    var bot = document.querySelector(".botao")
    bot.innerHTML = '<input type="button" onclick = "calcTemperatura()" value="Converter"> '
}