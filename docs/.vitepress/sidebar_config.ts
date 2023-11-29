export default interface Sidebar {
  text?: string,
  items?: Sidebar,
  collapsed?: boolean,
  link?: string
}

export function mainSidebar(): Sidebar | any {
  return [
    sidebarCategories(),
  ]
}

export function scenesSidebar() {
  return [
    {
      text: 'Back to main guide',
      link: '/get_started'
    },
    sidebarCategories(),
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
        { text: 'Chants', link: '/prayers/chants/' },
        { text: 'Quick Verses', link: '/prayers/verses/' },
      ]
    },
    sidebarCategories(),
  ]
}

export function resourcesSidebar() {
  return [
    { text: 'Glossary', link: '/resources/glossary' },
    {
      text: 'Templates',
      items: [
        { text: 'Copypaste', link: '/resources/templates/copypaste' },
        { text: 'Scene Template', link: '/resources/templates/scene_template' },
        { text: 'Tech Template', link: '/resources/templates/tech_template' }

      ]
    },
    { text: 'Useful Links', link: '/resources/links' },
    {
      text: 'Back to main guide',
      link: '/get_started'
    }
  ]
}

export function aboutSidebar() {
  return [
    {
      text: 'About',
      items: [
        { text: 'Game Versions', link: '/about/game_versions' },
        { text: 'Contributing', link: '/about/CONTRIBUTING' },
        { text: 'Credits', link: '/about/CREDITS' },
        { text: 'License', link: '/about/LICENSE' },
        { text: 'Disclaimer', link: '/about/DISCLAIMER' }
      ]
    },
    {
      text: 'Back to main guide',
      link: '/get_started'
    }
  ]
}
