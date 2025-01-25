'use strict'

const hambMenuBtn = document.getElementById('hamb-menu-btn');
const menuItems = document.querySelectorAll('.options-holder');
const menuItemsHolder = document.querySelector('.menu-options-holder');

const holderValues = document.getElementById('header-fetch-content-nav');

// Check if elements exist before adding event listeners
console.log(hambMenuBtn);
console.log(menuItems);
if (hambMenuBtn && menuItems.length > 0) {
    hambMenuBtn.addEventListener('click', function () {
        // Toggle 'hidden' class on each menu item
        menuItems.forEach(element => {
            if (element.classList.contains('hidden')) {
                element.classList.remove('hidden');
                console.log("teste 1");
                hambMenuBtn.textContent = 'FECHAR';

                menuItemsHolder.classList.add('pg-1');
            } else {
                element.classList.add('hidden');
                hambMenuBtn.textContent = 'MENU';

                menuItemsHolder.classList.remove('pg-1');
            }
        });
    });
}

if (holderValues) {
    holderValues.style.backgroundColor = "black";
}