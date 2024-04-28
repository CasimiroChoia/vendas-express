window.onresize = () => {
    verificarTela()
}
window.onload = () => {
    verificarTela();
    document.body.style.backgroundColor = `rgba(112, 171, 70, 0.6)`
}

function verificarTela(e) {
    if (window.innerWidth < 1000) {
        for (const tag of document.querySelectorAll("body *")) {
            tag.style.display = "none"
        }
        alert("Esta App Não foi feita para esta tela.")
    } else {
        for (const tag of document.querySelectorAll("body *")) {
            tag.style.display = ""
        }
        
    }
}