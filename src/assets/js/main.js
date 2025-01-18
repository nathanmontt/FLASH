'use strict'

/* Função para carregar componentes HTML dinamicamente, ou seja, FETCH (buscar, trazer, em português)
 * Dois parâmetros:
 * url: o caminho do arquivo HTML do que a gente quer colocar na main sem ter que escrever todo o código novamente e se repetir, não utilizando o conceito DRY (Don't Repeat Yourself), ex: "components/header.html"
 * containerId: o ID do elemento HTML onde o conteúdo será inserido (ex: "header-container")
*/

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

loadComponent("components/header.html", );

// document.querySelectorAll('[nav-links]').forEach(link => {
//     const contentContainer = document.getElementById('content-container');

//     link.onclick = function (element) {
//         element.preventDefault();
//         fetch(link.getAttribute('nav-links'))
//             .then(response => response.text())
//             .then(html => contentContainer.innerHTML = html)
//     }
// })