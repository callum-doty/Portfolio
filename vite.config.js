import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/Portfolio/',  // Your repo name
  publicDir: 'public',  // Explicitly set public directory
})