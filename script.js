document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evitar envío tradicional del formulario

    // Obtener valores de los campos
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();

    // Validar los campos (puedes añadir más validaciones según tus requisitos)
    if (email === '' || password === '') {
        alert('Por favor, completa todos los campos.');
        return;
    }

    // Redireccionar a la página home.html
    window.location.href = './home.html';
});

const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');

menuEmail.addEventListener('click, toggleDesktopMenu');

function toggleDesktopMenu() {
    console.log('clik');
    desktopMenu.classList.toggle('inactive');
} 