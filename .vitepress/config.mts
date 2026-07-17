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
          { text: 'Events', link: '/guides/events/' },
          { text: 'The Live Page', link: '/guides/live-page/' },
          { text: 'Chat', link: '/guides/chat/' },
          {
            text: 'For Artists',
            link: '/guides/artists/',
            items: [
              { text: 'Artist Profile', link: '/guides/artists/profile/' },
              { text: 'Streaming & Going Live', link: '/guides/artists/streaming/' },
            ],
          },
          { text: 'AI Tools', link: '/guides/ai-tools/' },
          { text: 'Technical', link: '/guides/technical/' },
        ],
      },
      {
        text: 'Howto',
        items: [{ text: 'How To Test Streaming', link: '/howto/artist/test-streaming/' }],
      },
      {
        text: 'Reference',
        items: [
          { text: 'API', link: '/reference/api/' },
          { text: 'Frankie', link: '/reference/frankie/' },
          { text: 'Glossary', link: '/reference/glossary/' },
        ],
      },
      {
        text: 'Meta',
        items: [
          { text: 'Philosophy', link: '/meta/philosophy/' },
          { text: 'Funding', link: '/meta/funding/' },
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
