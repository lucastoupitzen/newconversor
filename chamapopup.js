function popup() {
    var output = document.querySelector(".output")
    output.innerHTML = "Cheguei"
    function clicou() {
        const pop = document.getElementById("fundo")
        pop.classList.add('abrir')
    }
    const icon = document.getElementById("icon")
    icon.addEventListener('click', clicou)
}
