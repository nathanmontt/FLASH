const hambMenuBtn = document.getElementById('hamb-menu-btn');
const menuItems = document.querySelectorAll('.options-holder');
const hambMenuBtnClore = document.querySelector('.hamb-menu-btn-close');

// Check if elements exist before adding event listeners
if (hambMenuBtn && menuItems.length > 0) {
    hambMenuBtn.addEventListener('click', function () {
        // Toggle 'hidden' class on each menu item
        menuItems.forEach(element => {
            if (element.classList.contains('hidden')) {
                element.classList.remove('hidden');
                hambMenuBtn.textContent = 'FECHAR';
            } else {
                element.classList.add('hidden');
                hambMenuBtn.style.display = 'block';
                hambMenuBtn.textContent = 'MENU';
            }
        });

        // Toggle 'active' class on the button for animation
        hambMenuBtn.classList.toggle('active');
    });
}