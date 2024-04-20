

    for (let index = 0; index < document.querySelectorAll("tbody > *").length; index++) {
        let tr = document.querySelectorAll("tbody > *");
        const elemento = tr[index];
        // console.log(typeof elemento.children);
        elemento.children[4].innerText = parseInt(elemento.children[2].innerText) * parseInt(elemento.children[3].innerText)
        
        let classesDosCampos = ["atendedor","produto","preco","quantidade","total","data"];
        
        elemento.children[0].classList.add(classesDosCampos[0])
        elemento.children[1].classList.add(classesDosCampos[1])
        elemento.children[2].classList.add(classesDosCampos[2])
        elemento.children[3].classList.add(classesDosCampos[3])
        elemento.children[4].classList.add(classesDosCampos[4])
        elemento.children[5].classList.add(classesDosCampos[5])

    }
    if (localStorage.nome)  nome.innerText = localStorage.nome;
