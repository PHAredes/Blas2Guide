import { defineConfig } from 'vitepress'
import { withMermaid } from "vitepress-plugin-mermaid";

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
  
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    search: {
      provider: 'local'
    },

    editLink: {
      pattern: 'https://github.com/PHAredes/Blas2-Speedrun-Guide/tree/main/docs/:path'
    },

    nav: [
      { text: 'Arsenal', link: '/arsenal/' },
      { text: 'Prayers', link: '/prayers/' },
      { text: 'Scenes', link: '/scenes/' },
      { text: 'Techniques', link: '/technique/' }
    ],

    sidebar: [
      {
        text: 'Categories',
        collapsed: false,
        items: [
          { text: 'Arsenal of Penitence',
            link: '/arsenal/',
            collapsed: true,
            items: [
              { text: 'Ruego al Alba', link: '/arsenal/ruego/'},
              { text: 'Sarmiento & Centella', link: '/arsenal/s&c'},
              { text: 'Veredicto', link: '/arsenal/veredicto'}
            ]
          },
          { text: 'Chants and Quick Verses', link: '/prayers/' },
          { text: 'Scene by Scene', link: '/scenes/' },
          { text: 'Techniques', link: '/technique/' }
        ]
      },
      {
        text: 'About',
        items: [
          { text: 'Contributing', link: '/CONTRIBUTING' },
          { text: 'Credits', link: '/CREDITS' },
          { text: 'License', link: '/LICENSE' },
          { text: 'Disclaimer', link: '/DISCLAIMER' },
        ]
      }
    ],

    footer: {
      message: 'Released under the MIT License.'
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/PHAredes/Blas2-Speedrun-Guide' },
      { icon: 'youtube', link: 'https://www.youtube.com/@Blasphemous2Guide' },
    ],

  }
})
