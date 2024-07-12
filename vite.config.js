import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: 'https://github.com/kobi070/Protfolio3D.git',
  plugins: [react()],
  assetsInclude: ['**/*.glb']
})
