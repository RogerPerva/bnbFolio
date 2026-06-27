import { resolve } from 'node:path';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

const repositoryName = process.env.GITHUB_REPOSITORY?.split('/')[1];
const isUserPage = repositoryName?.endsWith('.github.io');
const base = process.env.GITHUB_PAGES === 'true' && repositoryName && !isUserPage
  ? `/${repositoryName}/`
  : '/';

export default defineConfig({
  base,
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        mentor: resolve(__dirname, 'mentor/index.html'),
        mentorGuia: resolve(__dirname, 'mentor/guia/index.html'),
      },
    },
  },
});
