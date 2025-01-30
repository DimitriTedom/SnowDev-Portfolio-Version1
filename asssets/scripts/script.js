document.addEventListener('DOMContentLoaded', () => {
    const menuBtn = document.querySelector('.menu-btn');
    const mobileMenu = document.querySelector('.mobile-menu');
    const closeBtn = document.querySelector('.close-btn');
    const navLinks = document.querySelectorAll('.mobile-menu a');
    const desktopIcons = document.querySelector('.box-icons');
    const mobileIcons = document.querySelector('.mobile-icons');

    // Clone les icônes sociales pour le menu mobile
    mobileIcons.innerHTML = desktopIcons.innerHTML;

    // Gestion du menu
    function toggleMenu() {
        mobileMenu.classList.toggle('active');
        document.body.style.overflow = mobileMenu.classList.contains('active') ? 'hidden' : 'auto';
    }

    menuBtn.addEventListener('click', toggleMenu);
    closeBtn.addEventListener('click', toggleMenu);

    // Ferme le menu au clic sur un lien
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            if(mobileMenu.classList.contains('active')) {
                toggleMenu();
            }
        });
    });

    // Ferme le menu au clic en dehors du contenu
    mobileMenu.addEventListener('click', (e) => {
        if(e.target === mobileMenu) {
            toggleMenu();
        }
    });

    // Animation au scroll
    window.addEventListener('scroll', () => {
        const header = document.querySelector('header');
        header.style.background = window.scrollY > 50 
            ? 'rgba(255, 255, 255, 0.15)' 
            : 'rgba(255, 255, 255, 0.05)';
    });
});