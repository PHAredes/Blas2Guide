import { defineConfig } from 'vitepress';
import { pagefindPlugin } from 'vitepress-plugin-pagefind'
import { mainSidebar, scenesSidebar, arsenalSidebar, techniqueSidebar, prayerSidebar } from './sidebar_config'

export default defineConfig({
  lang: 'en-US',
  title: "Blas2Guide",
  description: "Documentation for vanilla and randomized speedruns",
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['link', { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicons/favicon-32x32.png' }],
    ['link', { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicons/favicon-16x16.png' }],
    ['link', { rel: 'apple-touch-icon', sizes: '180x180', href: '/favicons/apple-touch-icon.png' }],
    ['link', { rel: 'manifest', href: '/favicons/manifest.json' }]
  ],
  vite: {
    plugins: [pagefindPlugin()],
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config

    editLink: {
      pattern: 'https://github.com/PHAredes/Blas2-Speedrun-Guide/tree/main/docs/:path'
    },

    nav: [
      { text: 'Arsenal', link: '/arsenal/' },
      { text: 'Prayers', link: '/prayers/' },
      { text: 'Scenes', link: '/scenes/' },
      { text: 'Techniques', link: '/technique/' }
    ],

    sidebar: {
      '/': mainSidebar(),
      '/arsenal/': arsenalSidebar(),
      '/prayers/': prayerSidebar(),
      '/scenes/': scenesSidebar(),
      '/technique/': techniqueSidebar()
    },

    footer: {
      message: 'Released under the MIT License.'
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/PHAredes/Blas2-Speedrun-Guide' },
      { icon: 'youtube', link: 'https://www.youtube.com/@Blasphemous2Guide' },
    ],

  }
})
