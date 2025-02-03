'use strict'

function loadComponent(url, containerId) {
    // Localiza o elemento no DOM pelo ID, ou seja, a partir do nome do ID que colocaremos na função, armazenaremos dentro do container
    const containerHolder = document.getElementById(containerId);
    
    // Faz uma requisição pelo caminho do arquivo para buscar o conteúdo HTML

    fetch(url)
    .then(verifyResponse => {
        if (!verifyResponse.ok) throw new Error(`Erro ao carregar ${url}`);

        // Retorna o conteúdo do arquivo como texto caso a response tenha dado certo
        return verifyResponse.text();
    })
    .then(htmlContent => {
        // Insere o conteúdo HTML carregado dentro do elemento identificado pelo containerId
        containerHolder.innerHTML = htmlContent;
    })
    .catch(error => {
        console.error(error);
    });

    return true;
}

loadComponent("components/header.html", "header-content");