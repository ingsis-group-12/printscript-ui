import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  return {
    define: {
      'process.env.FRONTEND_URL': JSON.stringify(env.VITE_REACT_APP_FRONTEND_URL),
      'process.env.BACKEND_URL': JSON.stringify(env.VITE_REACT_APP_BACKEND_URL)
    },
    plugins: [react()],
    preview: {
      host: true,
      port: 5173,
    }
  }
})
