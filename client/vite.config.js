import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3001, 
    open: true, 
    // If you need a specific host:
    // host: '0.0.0.0',
  },
})
