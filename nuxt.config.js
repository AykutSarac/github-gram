export default {
  // Disable server-side rendering (https://go.nuxtjs.dev/ssr-mode)
  ssr: false,

  // Target (https://go.nuxtjs.dev/config-target)
  target: 'static',
  router: {
    base: '/github-gram/'
  },

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'GitHub-gram',
    htmlAttrs: {
      lang: "en"
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'theme-color', content: '#000000'},
      { name: 'viewport', content: 'width=device-width, initial-scale=1, user-scalable=no' },
      { hid: 'description', name: 'description', content: 'GitHub-gram lets you to view GitHub users in instagram-like layout.' },
      { hid: 'keywords', name: 'keywords', content: 'GitHub, GitHub gram, githubgram'},
      { property: 'og:title', content: 'GitHub-gram'},
      { property: 'og:description', content: 'GitHub-gram lets you to view GitHub users in instagram-like layout.' },
      { property: 'og:url', content: 'https://aykutsarac.github.io/gitHub-gram'},
      { property: 'og:image', content: './githubgram.png'},
      { property: 'og:image:width', content: '64'},
      { property: 'og:image:height', content: '64'}
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: './favicon.ico' },
      { rel: 'stylesheet', type: 'text/css', href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css', defer: true}
    ]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: false,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
  ],
  bootstrapVue: {
    icons: false
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
  }
}
