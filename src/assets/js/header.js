const hambMenuBtn = document.getElementById('hamb-menu-btn');
const menuItems = document.querySelectorAll('.options-holder');
const menuItemsHolder = document.querySelector('.menu-options-holder');


// Check if elements exist before adding event listeners
if (hambMenuBtn && menuItems.length > 0) {
    hambMenuBtn.addEventListener('click', function () {
        // Toggle 'hidden' class on each menu item
        menuItems.forEach(element => {
            if (element.classList.contains('hidden')) {
                element.classList.remove('hidden');
                hambMenuBtn.textContent = 'FECHAR';

                menuItemsHolder.classList.add('pg-1');
                
                // overlay.classList.remove('hidden');
            } else {
                element.classList.add('hidden');
                hambMenuBtn.style.display = 'block';
                hambMenuBtn.textContent = 'MENU';

                menuItemsHolder.classList.remove('pg-1');
            }
        });
    });
}