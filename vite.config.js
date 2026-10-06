import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  // Le CSS Nicepage contient des sélecteurs non standard que lightningcss refuse.
  build: { cssMinify: 'esbuild' },
});
