document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll('[nm]').forEach(link => {
        link.onclick = function(e) {
            const conteudo = document.getElementById('conteudo');

            e.preventDefault();
            
            fetch(link.getAttribute('nm'))
                .then(resp => resp.text())
                .then(html => conteudo.innerHTML = html)
        }
    });
})