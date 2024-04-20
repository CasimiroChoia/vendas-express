if (localStorage.nome == null || localStorage.nome == undefined || localStorage.nome == "null" || localStorage.nome == "undefined") {
    do {
        let perguntaNome = "Qual é o Nome Da Sua Empresa.";
        localStorage.nome = prompt(perguntaNome);
    } while (localStorage.nome === null);
}