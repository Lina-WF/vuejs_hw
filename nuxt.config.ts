import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  build: {
    transpile: ['vuetify'],
  },
  modules: [
    '@nuxt/content',
    '@nuxtjs/apollo',
    '@pinia/nuxt',
  ],
  vite: {
    optimizeDeps: {
      include: [
        '@vue/devtools-core',
        '@vue/devtools-kit',
        'jwt-decode',
      ]
    },
    vue: {
      template: {
        transformAssetUrls,
      },
    },
    ssr: {
      noExternal: ['vuetify'], 
    },
    css: {
      transformer: 'lightningcss', 
    },
    build: {
      cssMinify: 'lightningcss' 
    }
  },
  apollo: {
    clients: {
      default: {
        httpEndpoint: 'http://localhost:4000/graphql'
      }
    },
  },
  devtools: { enabled: true },
  compatibilityDate: '2025-07-15',
  devServer: {
    port: 5173,
  },
  app: {
    head: {
      title: 'Домашняя работа',
      htmlAttrs: {
        lang: 'en'
      },
      meta: [
        { charset: 'UTF-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' }
      ],
    }
  },
  css: [
    './style.css'
  ]
})
