import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/SoapLife/',   // 👈 THIS LINE MUST BE HERE
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
