import { fileURLToPath } from 'node:url'
import { defineVitestConfig } from '@nuxt/test-utils/config'
import { configDefaults } from 'vitest/config'

export default defineVitestConfig({
    test: {
      environment: 'nuxt', 
      environmentOptions: {
        nuxt: {
          domEnvironment: 'jsdom', 
        }
      },
      exclude: [...configDefaults.exclude, 'e2e/**'],
      root: fileURLToPath(new URL('./', import.meta.url)),
      setupFiles: ['./testsSetup/globalSetup.js'],
    },
  });