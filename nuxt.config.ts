// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['/public/scss/style.scss'],
  modules: [
    "@nuxtjs/tailwindcss",
    'vue3-carousel-nuxt',
    "@ant-design-vue/nuxt",
    "@nuxtjs/sitemap",
    "@nuxtjs/robots"
  ],
  tailwindcss: {
  },
  carousel: {
    prefix: 'Vue'
  },
  app: {
    head: {
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
      title: "Z8 | Học lập trình cơ bản",
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        {
          hid: "description",
          name: "description",
          content: "Z8 | Học lập trình cơ bản với những khóa học Frontend với Vue.js, Angular, React, Backend Với Nest.js .NET Core",
        },
      ],
      link: [
        { rel: "icon", type: "image/png", sizes: "16x16", href: "/favicon/favicon_16x16.png" },
        { rel: "icon", type: "image/png", sizes: "32x32", href: "/favicon/favicon_32x32.png" }
      ],
    },
  },
});