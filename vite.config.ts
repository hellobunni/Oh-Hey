/// <reference types="vitest/config" />
import { defineConfig } from 'vite'
import tsconfigPaths from 'vite-tsconfig-paths'
import viteReact from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { storybookTest } from '@storybook/addon-vitest/vitest-plugin'

const dirname = typeof __dirname !== 'undefined' ? __dirname : path.dirname(fileURLToPath(import.meta.url))

const config = defineConfig({
<<<<<<< HEAD
  plugins: [devtools(), tsconfigPaths({
    projects: ['./tsconfig.json']
  }), tailwindcss(), tanstackStart({ server: { preset: 'vercel' } }), viteReact()],
=======
  plugins: [tsconfigPaths({ projects: ['./tsconfig.json'] }), tailwindcss(), viteReact()],
>>>>>>> d44ae0fcfcf7a589454ff07977c7e729281afc90
  test: {
    workspace: [{
      extends: true,
      plugins: [
        storybookTest({ configDir: path.join(dirname, '.storybook') }),
      ],
      test: {
        name: 'storybook',
        browser: {
          enabled: true,
          headless: true,
          provider: 'playwright',
          instances: [{ browser: 'chromium' }],
        },
      },
    }],
  },
})

export default config
