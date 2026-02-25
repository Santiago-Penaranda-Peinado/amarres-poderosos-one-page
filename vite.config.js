// Ubicación: /app/vite.config.js
import { defineConfig } from 'vite';

export default defineConfig({
    css: {
        devSourcemap: true // Permite rastrear el SCSS exacto en el inspector del navegador
    },
    server: {
        host: true, // Listen on all IP addresses (important for Docker)
        port: 5173,
        watch: {
            usePolling: true // Important for Docker on Windows
        }
    }
});
