const hambMenuBtn = document.getElementById('hamb-menu-btn');
const menuItems = document.querySelectorAll('.options-holder');
const menuItemsHolder = document.querySelector('.menu-options-holder');

// Check if elements exist before adding event listeners
if (hambMenuBtn && menuItems.length > 0) {
    hambMenuBtn.addEventListener('click', function () {
        console.log("teste 1");
        // Toggle 'hidden' class on each menu item
        menuItems.forEach(element => {
            if (element.classList.contains('hidden')) {
                console.log("teste 1");
                element.classList.remove('hidden');
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