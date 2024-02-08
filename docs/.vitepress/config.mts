import { defineConfig } from 'vitepress';
import { tabsMarkdownPlugin } from 'vitepress-plugin-tabs'
import { mainSidebar, scenesSidebar, arsenalSidebar, techniqueSidebar, prayerSidebar, resourcesSidebar, aboutSidebar } from './sidebar_config'

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
  },
  markdown: {
    config(md) {
      md.use(tabsMarkdownPlugin)
    }
  },
  cleanUrls: true,
  sitemap: {
    hostname: 'https://blas2guide.vercel.app',
  },
  themeConfig: {
    returnToTopLabel: 'Back to top', 
    search: {
      provider: 'local'
    },
    editLink: {
      pattern: 'https://github.com/PHAredes/Blas2-Speedrun-Guide/tree/main/docs/:path'
    },

    nav: [
      {
        text: 'Guide',
        items: [
          { text: 'Arsenal', link: '/arsenal/' },
          { text: 'Prayers', link: '/prayers/' },
          { text: 'Scenes', link: '/scenes/' },
          { text: 'Techniques', link: '/technique/' }]
      },
      {
        text: 'Resources',
        items: [
          { text: 'Glossary', link: '/resources/glossary' },
          { text: 'Links', link: '/resources/links'}
        ]
      },
      {text: 'About', link: '/about/DISCLAIMER'}
    ],

    sidebar: {
      '/': mainSidebar(),
      '/arsenal/': arsenalSidebar(),
      '/prayers/': prayerSidebar(),
      '/scenes/': scenesSidebar(),
      '/technique/': techniqueSidebar(),
      '/resources/': resourcesSidebar(),
      '/about/': aboutSidebar()
    },

    footer: {
      message: 'Content under the CC BY-SA 4.0 License. Powered by Vitepress'
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/PHAredes/Blas2-Speedrun-Guide' },
      { icon: 'youtube', link: 'https://www.youtube.com/@Blasphemous2Guide' },
    ],

  }
})
