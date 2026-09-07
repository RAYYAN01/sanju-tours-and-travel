import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Absolute base so hashed asset URLs resolve correctly on deep routes
  // (/fleet, /services, …) now that the app uses BrowserRouter.
  base: '/',
  server: {
    port: 3000,
    open: false,
    watch: {
      usePolling: true,
      interval: 800,
    }
  }
});
