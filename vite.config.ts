import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          react: ['react', 'react-dom'],
          i18next: ['i18next', 'react-i18next'],
          // Add other large libraries here if needed
        },
      },
    },
  },
})
