// document.addEventListener("DOMContentLoaded", function () {
//     document.querySelectorAll('[nm]').forEach(link => {
//         link.onclick = function(e) {
//             const conteudo = document.getElementById('conteudo');

//             e.preventDefault();
            
//             fetch(link.getAttribute('nm'))
//                 .then(resp => resp.text())
//                 .then(html => conteudo.innerHTML = html)
//         }
//     });
// })

// Função para carregar componentes HTML dinamicamente
// Recebe dois parâmetros:
// - url: o caminho para o arquivo HTML do componente (ex: "components/header.html")
// - containerId: o ID do elemento HTML onde o conteúdo será inserido (ex: "header-container")
document.addEventListener("DOMContentLoaded", function () {
    function loadComponent(url, containerId) {
        // Localiza o elemento no DOM pelo ID fornecido
        const container = document.getElementById(containerId);
        
        // Faz uma requisição HTTP para buscar o conteúdo do arquivo HTML
        fetch(url)
        .then(response => {
            // Verifica se a resposta foi bem-sucedida (status 200-299)
            if (!response.ok) {
            // Caso contrário, lança um erro com a URL do componente que falhou
                throw new Error(`Erro ao carregar ${url}`);
            }
            // Retorna o conteúdo do arquivo como texto
            return response.text();
        })
        .then(htmlContent => {
            // Insere o conteúdo HTML carregado dentro do elemento identificado pelo containerId
            container.innerHTML = htmlContent;
        })
        .catch(error => {
            // Captura e exibe no console qualquer erro ocorrido durante o fetch ou a manipulação
            console.error(error);
        });

        return true;
    }
    
    // Carrega o Header no elemento com ID "header-container"
    // Aqui, "components/header.html" é o caminho do arquivo HTML do header
    // e "header-container" é o ID do elemento onde o header será inserido
    loadComponent("src/components/header.html", "header-container");

    // Carrega o Footer no elemento com ID "footer-container" 
    // "components/footer.html" é o caminho do arquivo HTML do footer
    // e "footer-container" é o ID do elemento onde o footer será inserido
    // loadComponent("components/footer.html", "footer-container");
});
  