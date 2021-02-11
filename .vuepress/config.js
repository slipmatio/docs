module.exports = {
  title: 'Slipmat v3 Docs',
  description: 'Developer documentation for Slipmat.io platform v3.',
  themeConfig: {
    repo: 'https://gitlab.com/slipmatio/docs',
    repoLabel: '',
    editLinks: true,
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Slipmat v3', link: 'https://next.slipmat.io' },
      { text: 'Slipmat Old', link: 'https://slipmat.io' },
      { text: 'Developer Docs', link: 'https://developer.slipmat.io/' },
    ],
    sidebarDepth: 2,
    lastUpdated: 'Last Modified', // string | boolean
    logo: '/assets/img/slipmat.png',
    sidebar: ['/', '/roadmap/', '/meta/'],
  },
  markdown: {
    extractHeaders: ['h2', 'h3', 'h4'],
  },
  plugins: ['plausible-analytics'],
}
