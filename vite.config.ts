import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

export default defineConfig({
  // Required for https://mehdiazzam.github.io/4Traders/
  base: '/4Traders/',
  plugins: [react(), tailwindcss()],
})
