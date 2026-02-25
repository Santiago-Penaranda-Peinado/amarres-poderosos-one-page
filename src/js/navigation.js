export function initNavigation() {
    const header = document.querySelector('.header');
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.header__link');

    // Scroll glassmorphism
    let ticking = false;
    window.addEventListener('scroll', () => {
        if (!ticking) {
            window.requestAnimationFrame(() => {
                header.classList.toggle('is-scrolled', window.scrollY > 30);
                ticking = false;
            });
            ticking = true;
        }
    });

    // Mobile menu
    if (navToggle && navMenu) {
        navToggle.addEventListener('click', () => {
            const isOpen = navMenu.classList.toggle('is-open');
            navToggle.classList.toggle('is-active');
            header.classList.toggle('menu-open', isOpen);
            if (isOpen) document.body.style.overflow = 'hidden';
            else document.body.style.overflow = 'auto';
        });

        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                if (window.innerWidth <= 991) {
                    navMenu.classList.remove('is-open');
                    navToggle.classList.remove('is-active');
                    header.classList.remove('menu-open');
                    document.body.style.overflow = 'auto';
                }
            });
        });

        window.addEventListener('resize', () => {
            if (window.innerWidth > 991 && navMenu.classList.contains('is-open')) {
                navMenu.classList.remove('is-open');
                navToggle.classList.remove('is-active');
                header.classList.remove('menu-open');
                document.body.style.overflow = 'auto';
            }
        });
    }

    // Active section highlighting (IntersectionObserver)
    const sections = document.querySelectorAll('section[id]');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const id = entry.target.getAttribute('id');
                navLinks.forEach(link => {
                    link.classList.toggle('active', link.getAttribute('href') === `#${id}`);
                });
            }
        });
    }, { rootMargin: '-30% 0px -60% 0px', threshold: 0 });

    sections.forEach(section => observer.observe(section));

    // Smooth scroll
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href').substring(1);
            if (!targetId) return;
            const target = document.getElementById(targetId);
            if (target) {
                e.preventDefault();
                const headerHeight = header.offsetHeight;
                const offset = target.getBoundingClientRect().top + window.pageYOffset - headerHeight - 20;
                window.scrollTo({ top: offset, behavior: 'smooth' });
            }
        });
    });

    console.log('%cHeader místico inicializado ✨', 'color:#d4af37;font-weight:bold');
}