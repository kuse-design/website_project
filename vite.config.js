import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    // strictPort stops Vite silently sliding to 3001 when 3000 is busy, which
    // is the same port the contact API uses and produces a baffling failure.
    strictPort: true,
    port: 3000,
    proxy: {
      // The frontend calls /api/contact as a relative path in every environment.
      // Proxying it here means local dev exercises the same same-origin request
      // as production, so CORS is never part of the local or deployed path.
      '/api': {
        target: 'http://localhost:3001',
        changeOrigin: true,
      },
    },
  },
})
