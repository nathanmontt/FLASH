'use strict';

const hambMenuBtn = document.getElementById('hamb-menu-btn');
const menuItems = document.querySelectorAll('.options-holder');

// Check if elements exist before adding event listeners
if (hambMenuBtn && menuItems.length > 0) {
    hambMenuBtn.addEventListener('click', function () {
        // Toggle 'hidden' class on each menu item
        menuItems.forEach(element => {
            element.classList.toggle('hidden');
        });

        // Toggle 'active' class on the button for animation
        hambMenuBtn.classList.toggle('active');
    });
} else {
    console.error('Hamburger button or menu items not found in the DOM');
}