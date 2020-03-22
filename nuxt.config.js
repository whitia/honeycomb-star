
export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: 'Honeycomb-Star 吉田シゲロウ オフィシャルウェブサイト',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/images/star.png' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Michroma&display=swap' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
    '@/assets/stylesheets/common.scss',
    '@/assets/stylesheets/header.scss',
    '@/assets/stylesheets/cover.scss',
    '@/assets/stylesheets/about.scss'
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    'bootstrap-vue/nuxt'
  ],
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  }
}
