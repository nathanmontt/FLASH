const hambMenuBtn = document.getElementById('hamb-menu-btn');
const menuItemsHolder = document.querySelectorAll('.menu-options-holder');
// const hambMenuBtnClore = document.querySelector('.hamb-menu-btn-close');
const overlay = document.querySelector('.overlay');

// Check if elements exist before adding event listeners
if (hambMenuBtn && menuItemsHolder.length > 0) {
    hambMenuBtn.addEventListener('click', function () {
        // Toggle 'hidden' class on each menu item
        menuItemsHolder.forEach(element => {
            if (element.classList.contains('hidden')) {
                element.classList.remove('hidden');
                hambMenuBtn.textContent = 'FECHAR';
                
                // overlay.classList.remove('hidden');
            } else {
                element.classList.add('hidden');
                hambMenuBtn.style.display = 'block';
                hambMenuBtn.textContent = 'MENU';

                // overlay.classList.add('hidden');
            }
        });
    });
}