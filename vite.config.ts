import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  assetsInclude: ['**/*.JPG'],
  build: {
    outDir: 'dist', // Where the build output goes
    emptyOutDir: true, // Clears dist folder before building
  },
});
