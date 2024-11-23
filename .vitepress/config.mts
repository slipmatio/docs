import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'Slipmat.io Docs',
  description: 'Documentation for Slipmat.io platform v3',
  head: [['link', { rel: 'icon', href: '/favicon.ico' }]],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'New Slipmat', link: 'https://next.slipmat.io' },
      { text: 'Old Slipmat', link: 'https://slipmat.io' },
      { text: 'Blog', link: 'https://blog.slipmat.io' },
    ],

    sidebar: [
      {
        text: 'Guides',
        link: '/guides/',
        items: [{ text: 'Account', link: '/guides/account/' }],
      },
      {
        text: 'Reference',
        link: '/reference/',
        items: [{ text: 'Glossary', link: '/reference/glossary/' }],
      },
      {
        text: 'Development',
        link: '/development/',
        items: [
          { text: 'Contributing', link: '/development/contributing/' },
          { text: 'Changelog', link: '/development/changes/' },
        ],
      },
    ],

    socialLinks: [{ icon: 'github', link: 'https://github.com/slipmatio/docs' }],

    editLink: {
      pattern: 'https://github.com/slipmatio/docs/edit/main/:path',
    },

    search: {
      provider: 'local',
    },
  },
  appearance: 'force-dark',
  lastUpdated: true,
})
