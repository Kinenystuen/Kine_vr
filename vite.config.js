import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

const githubRepository = globalThis.process?.env?.GITHUB_REPOSITORY

// https://vite.dev/config/
export default defineConfig({
  base: githubRepository
    ? `/${githubRepository.split('/')[1]}/`
    : '/',
  plugins: [react(), tailwindcss()],
})
