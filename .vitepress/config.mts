import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'Slipmat.io Docs',
  description: 'Documentation for Slipmat.io platform v3',
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    [
      'script',
      {
        defer: '',
        src: 'https://plausible.io/js/script.js',
        'data-domain': 'docs.slipmat.io',
      },
    ],
  ],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Slipmat v3', link: 'https://next.slipmat.io' },
      { text: 'Slipmat v2', link: 'https://slipmat.io' },
      { text: 'Blog', link: 'https://blog.slipmat.io' },
    ],

    sidebar: [
      {
        text: 'Guides',
        link: '/guides/',
        items: [
          { text: 'v3 Migration', link: '/guides/v3-migration/' },
          { text: 'Account', link: '/guides/account/' },
          {
            text: 'For Artists',
            link: '/guides/artists/',
            items: [{ text: 'Streaming', link: '/guides/artists/streaming/' }],
          },
          { text: 'Technical', link: '/guides/technical/' },
        ],
      },
      {
        text: 'Reference',
        link: '/reference/',
        items: [
          { text: 'Frankie', link: '/reference/frankie/' },
          { text: 'Glossary', link: '/reference/glossary/' },
        ],
      },
      {
        text: 'Meta',
        link: '/meta/',
        items: [
          { text: 'Philosophy', link: '/meta/philosophy/' },
          { text: 'Monetization', link: '/meta/monetization/' },
          { text: 'Code of Conduct', link: '/meta/code-of-conduct/' },
        ],
      },
      {
        text: 'Development',
        link: '/development/',
        items: [
          { text: 'Open Source', link: '/development/open-source/' },
          { text: 'Contributing', link: '/development/contributing/' },
          // Let's put this back when we're actually updating it!
          // { text: 'Changelog', link: '/development/changes/' },
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
  sitemap: {
    hostname: 'https://docs.slipmat.io',
  },
})
