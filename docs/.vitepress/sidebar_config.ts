export default interface Sidebar {
  text?: string,
  items?: Sidebar,
  collapsed?: boolean,
  link?: string
}

export function mainSidebar(): Sidebar | any {
  return [
    sidebarCategories(),
    sidebarResources(),
    sidebarAbout()
  ]
}

export function scenesSidebar() {
  return [
    {
      text: 'Back to main guide',
      link: '/get_started'
    },
    sidebarCategories(),
    sidebarResources(),
    sidebarAbout()
  ]
}

export function arsenalSidebar() {
  return [
    {
      text: 'Arsenal of Penitence',
      link: '/arsenal/',
      items: [
        { text: 'Ruego al Alba', link: '/arsenal/ruego/' },
        { text: 'Sarmiento & Centella', link: '/arsenal/s&c' },
        { text: 'Veredicto', link: '/arsenal/veredicto' }
      ]
    },
    sidebarCategories(),
    sidebarResources(),
    sidebarAbout()
  ]
}

export function techniqueSidebar() {
  return [
    {
      text: 'Techniques',
      link: '/technique/',
      items: [
        { text: 'Glitched', link: '/technique/glitched/' },
        { text: 'Intended', link: '/technique/intended/' },
        { text: 'Mirabras Rabbithole', link: '/technique/mirabras_rabbithole/' }
      ]
    }, 
    sidebarCategories(),
    sidebarResources(),
    sidebarAbout()
  ]
}

function sidebarCategories() {
  return {
    text: 'Categories',
    items: [
      { text: 'Arsenal of Penitence', link: '/arsenal/' },
      { text: 'Chants and Quick Verses', link: '/prayers/' },
      { text: 'Scene by Scene', link: '/scenes/' },
      { text: 'Techniques', link: '/technique/' }
    ]
  }
}
export function prayerSidebar() {
  return [
    {
      text: 'Prayers',
      link: '/prayers/',
      items: [
        { text: 'Chants', link: 'prayers'},
        { text: 'Quick Verses', link: '/prayers/verses/'},
      ]
    },
    sidebarCategories(),
    sidebarResources(),
    sidebarAbout()
  ]
}

function sidebarResources() {
  return {
    text: 'Resources',
    items: [
      { text: 'Glossary', link: '/resources/glossary' },
      {
        text: 'Additional Resources',
        link: '/resources/additional_resources',
        collapsed: true,
        items: [
          { text: 'Tech', link: '/templates/tech_template' },
          { text: 'Scene', link: '/templates/scene_template' },
          { text: 'Copypaste', link: '/templates/copypaste' }
        ]
      },
    ]
  }
}

function sidebarAbout() {
  return {
    text: 'About',
    items: [
      { text: 'Game Versions', link: '/about/game_versions' },
      { text: 'Contributing', link: '/about/CONTRIBUTING' },
      { text: 'Credits', link: '/about/CREDITS' },
      { text: 'License', link: '/about/LICENSE' },
      { text: 'Disclaimer', link: '/about/DISCLAIMER' },
    ]
  }
}
