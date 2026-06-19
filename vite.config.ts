import path from 'path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tsConfigPaths from 'vite-tsconfig-paths'

export default defineConfig({
  base: './',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  plugins: [
    tsConfigPaths({ projects: ['./tsconfig.json'] }),
    react(),
  ],
  build: {
    target: 'esnext',
  },
})