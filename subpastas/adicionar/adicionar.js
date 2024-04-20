let atendedor = document.querySelector("#atendedor");
let produto = document.querySelector("#produto");
let quantidade = document.querySelector("#quantidade");
let total = document.querySelector("#total");

let verificarAtendedor = document.querySelector("#verificarAtendedor");
let verificarProduto = document.querySelector("#verificarProduto");
let verificarQuantidade = document.querySelector("#verificarQuantidade");
let verificarTotal = document.querySelector("#verificarTotal");

document.querySelector("#executar").addEventListener("click",() => {
    if (
        atendedor.value     == ""   ||
        produto.value       == ""   ||
        quantidade.value    == ""   ||
        total.value         == ""
    ) {
        return alert("Preencha Todos Os Campos.");
    }
    verificarAtendedor.value = atendedor.value;
    verificarProduto.value = produto.value;
    verificarQuantidade.value = quantidade.value;
    verificarTotal.value = total.value;

    try {
        document.querySelector('#painel-confirmacao').showModal();
    } catch (error) {
        alert("O Seu Navegador Não Soporta Esta Operação.\nPor Favor Baixe o Google Chrome.")
    }
})

setInterval(() => {
    let agora = new Date();
    let ano = agora.getFullYear();
    let mes = agora.getMonth();
    let dia = agora.getDate();
    let hora = agora.getHours();
    let min = agora.getMinutes();
    let sec = agora.getSeconds();

    if (mes < 10) mes = '0' + mes;
    if (dia < 10) dia = '0' + dia;
    if (hora < 10) hora = '0' + hora;
    if (min < 10) min = '0' + min;
    document.querySelector("span.data").innerHTML = `${ano}-${mes}-${dia} ${hora}:${min}:${sec}`
}, 1 * 1000);

document.querySelector("#Modal-Voltar").addEventListener("click",() => {
    document.querySelector('#painel-confirmacao').close();
})