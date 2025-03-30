document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('#nav-menu');

    toggleButton.addEventListener('click', () => {
        const isExpanded = toggleButton.getAttribute('aria-expanded') === 'true';
        toggleButton.setAttribute('aria-expanded', !isExpanded);
        navMenu.classList.toggle('show');
        toggleButton.textContent = isExpanded ? '☰ Menú' : '✕ Cerrar';
    });
});