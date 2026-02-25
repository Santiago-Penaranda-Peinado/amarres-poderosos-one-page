// Ubicación: /app/src/js/navigation.js
export function initNavigation() {
    const header = document.querySelector('.header');
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.header__link');

    // 1. Header scroll effect (Glassmorphism & Materialization)
    let lastScrollY = window.scrollY;
    let ticking = false;

    window.addEventListener('scroll', () => {
        lastScrollY = window.scrollY;

        if (!ticking) {
            window.requestAnimationFrame(() => {
                if (lastScrollY > 20) {
                    header.classList.add('is-scrolled');
                } else {
                    header.classList.remove('is-scrolled');
                }
                ticking = false;
            });
            ticking = true;
        }
    });

    // 2. Mobile Menu Toggle
    if (navToggle && navMenu) {
        navToggle.addEventListener('click', () => {
            navMenu.classList.toggle('is-open');
            navToggle.classList.toggle('is-active');

            // Cambiar icono de hamburguesa a X y viceversa suavemente usando CSS, no innerHTML directamente
            if (navMenu.classList.contains('is-open')) {
                navToggle.innerHTML = '<i class="fas fa-times"></i>';
                document.body.style.overflow = 'hidden'; // Evitar scroll de fondo
            } else {
                navToggle.innerHTML = '<i class="fas fa-bars"></i>';
                document.body.style.overflow = 'auto'; // Restaurar scroll
            }
        });

        // Close menu on link click
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                if (window.innerWidth < 992) {
                    navMenu.classList.remove('is-open');
                    navToggle.classList.remove('is-active');
                    navToggle.innerHTML = '<i class="fas fa-bars"></i>';
                    document.body.style.overflow = 'auto';
                }
            });
        });

        // Ensure flawless transition from mobile to desktop
        window.addEventListener('resize', () => {
            if (window.innerWidth >= 992 && navMenu.classList.contains('is-open')) {
                navMenu.classList.remove('is-open');
                navToggle.classList.remove('is-active');
                navToggle.innerHTML = '<i class="fas fa-bars"></i>';
                document.body.style.overflow = 'auto';
            }
        });
    }

    // 3. Smooth scroll with offset for fixed header
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;

            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                // Determine offset based on whether the header is scrolled or not
                const headerOffset = window.scrollY > 50 ? 70 : 100;
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: "smooth"
                });
            }
        });
    });
}
