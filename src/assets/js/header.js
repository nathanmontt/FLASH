'use strict'

// const hambMenuBtn = document.getElementById('hamb-menu-btn');
// const optionsHolder = document.querySelectorAll('.options-holder');

// document.addEventListener('DOMContentLoaded', function() {
//     hambMenuBtn.addEventListener("click", function() {
//         optionsHolder.forEach(function(element) {
//             if (element.classList.contains('hidden')) {
//                 element.classList.remove('hidden');
//             } else {
//                 element.classList.add('hidden');
//             }
//         })
//     })
// })

// document.addEventListener('DOMContentLoaded', function() {
//     hambMenuBtn.addEventListener('click', function() {
//         optionsHolder.forEach(element => {
//             if (element.classList.contains('hidden')) {
//                 element.classList.remove('hidden');
//             } else {
//                 element.classList.add('hidden');
//             }
//         });
//     });
// });


// document.addEventListener('DOMContentLoaded', function() {
//     optionsHolder.forEach(element => {
//         if (element.classList.contains('hidden')) element.classList.remove('hidden');
//         else element.classList.add('hidden');
//     })
//     hambMenuBtn.addEventListener('click', function() {
//     });
// })

document.addEventListener('DOMContentLoaded', function () {
    const hambMenuBtn = document.getElementById('hamb-menu-btn');
    const optionsHolder = document.querySelectorAll('.options-holder');

    // console.log(hambMenuBtn); // Verifique se o botão está sendo encontrado
    // console.log(optionsHolder); // Verifique se os elementos com a classe estão sendo encontrados

//     console.log('hambMenuBtn:', hambMenuBtn);
// console.log('optionsHolder:', optionsHolder);

    // Verifica se os elementos existem antes de adicionar o evento
    if (hambMenuBtn && optionsHolder.length > 0) {
        hambMenuBtn.addEventListener('click', function () {
            optionsHolder.forEach(element => {
                // Alterna a classe 'hidden' de forma simplificada
                element.classList.toggle('hidden');
            });
        });
    } else {
        console.error('Elementos não encontrados no DOM.');
    }
});