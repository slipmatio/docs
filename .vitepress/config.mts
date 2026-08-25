import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'Slipmat.io Docs',
  description: 'Documentation for the Slipmat.io platform',
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
      { text: 'Slipmat.io', link: 'https://slipmat.io' },
      { text: 'Backstage', link: 'https://backstage.slipmat.io' },
    ],

    sidebar: [
      {
        text: 'Guides',
        link: '/guides/',
        items: [
          { text: 'v3 Migration', link: '/guides/v3-migration/' },
          { text: 'Account', link: '/guides/account/' },
          {
            text: 'Events',
            link: '/guides/events/',
            items: [{ text: 'How Events Start And End', link: '/guides/events/lifecycle/' }],
          },
          { text: 'The Live Page', link: '/guides/live-page/' },
          { text: 'Activity Log', link: '/guides/activity-log/' },
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
        link: '/howto/',
        items: [
          { text: 'Schedule Your First Event', link: '/howto/artist/schedule-event/' },
          { text: 'Set Up Song Requests', link: '/howto/artist/set-up-requests/' },
          { text: 'Test Your Stream', link: '/howto/artist/test-streaming/' },
          { text: 'Run Your Event', link: '/howto/artist/run-your-show/' },
        ],
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
