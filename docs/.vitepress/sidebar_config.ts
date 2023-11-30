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
    /*
      text: 'Scenes',
      link: '/scenes/',
      collapse: true,
      items:
        [
          { text: 'z01 - Repose of the Silent One', link: '/scenes/z01/' },
         - z02 - [Ravine of the High Stones](z02 /)
          - z03 - [Aqueduct of the Costales](z03 /)
          - z04 - [Sacred Entombments](z04 /)
          - z05 - [City of the Blessed Name](z05 /)
          - z06 - [Grilles and Ruin](z06 /)
          - z07 - [Palace of the Embroideries](z07 /)
          - z08 - [Choir of Thorns](z08 /)
          - z09 - [Crown of Towers](z09 /)
          - z10 - [Elevated Temples](z10 /)
          - z11 - [Basilica of Absent Faces](z11 /)
          - z12 - [Sunken Cathedral](z12 /)
          - z13 - [Two Moons](z13 /)
          - z14 - [Mother of Mothers](z14 /)
          - z15 - [Sueños de Incienso](z15 /)
          - z16 - [The Severed Tower](z16 /)
          - z17 - [Streets of Wakes](z17 /)
          - z18 - [Crimson Rains](z18 /)
          - z19 - [Profundo Lamento](z19 /)
          - z20 - [Sea of Ink](z20 /)
          - z21 - [Labyrinth of Tides](z21 /)
          - z23 - [Beneath Her Sacred Grounds](z23 /)
          - z24 - [Garden of the High Choirs](z24 /)
          - z25 - [Chapel of the Five Doves](z25 /)
          - z26 - [Forlorn Patio](z26 /)
          
        ]
    }*/
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
    {
      text: 'Resources',
      items: [
        { text: 'Glossary', link: '/resources/glossary' },
        {
          text: 'Templates',
          items: [
            { text: 'Copypaste', link: '/resources/templates/copypaste' },
            { text: 'Scene Template', link: '/resources/templates/scene_template' },
            { text: 'Tech Template', link: '/resources/templates/tech_template' },
            { text: 'Skip Template', link: '/resources/templates/skip_template' }

          ]
        },
        { text: 'Useful Links', link: '/resources/links' },
        {
          text: 'Back to main guide',
          link: '/get_started'
        }
      ]
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
