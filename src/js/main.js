import './animations.js';
import { initNavigation } from './navigation.js';

document.addEventListener('DOMContentLoaded', () => {
    initNavigation();
    console.log("App initialized");

    // Init particles for mystical effect
    particlesJS('particles-js', {
        particles: {
            number: { value: 80, density: { enable: true, value_area: 800 } },
            color: { value: '#d4af37' },
            shape: { type: 'circle' },
            opacity: { value: 0.5, random: false },
            size: { value: 3, random: true },
            line_linked: { enable: true, distance: 150, color: '#ff8c00', opacity: 0.4, width: 1 },
            move: { enable: true, speed: 2, direction: 'none', random: false, straight: false, out_mode: 'out', bounce: false }
        },
        interactivity: {
            detect_on: 'canvas',
            events: { onhover: { enable: true, mode: 'repulse' }, onclick: { enable: true, mode: 'push' }, resize: true },
            modes: { repulse: { distance: 200, duration: 0.4 }, push: { particles_nb: 4 } }
        },
        retina_detect: true
    });
});