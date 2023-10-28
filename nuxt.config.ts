// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    "@nuxt-alt/google-analytics",
    "@nuxt/content"
  ], 
  gAnalytics: {
    measurementId: 'G-Q8Q8ST4HH6'
  },
  app: {
    head: {
      link: [
        {
          rel: "stylesheet", 
          href: "https://fonts.googleapis.com/css2?family=Zen+Loop:ital@0;1&display=swap"
        }
      ]  
    }
  },
  devtools: { enabled: false },
  css: [
    '~/assets/css/main.css',
   '@fortawesome/fontawesome-svg-core/styles.css'
  ],
   postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  nitro: {
    prerender: {
      routes: ['/sitemap_blog.xml']
    }
  },
  content: {
    markdown: {
      anchorLinks: false
    }
  }

})
