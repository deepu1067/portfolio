import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// ...existing code...

export default defineConfig({
  plugins: [react()],
  base: '/portfolio/', // Replace 'your-repo-name' with your actual repository name
  // ...existing code...
})