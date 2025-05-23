import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
	title: "Slipmat.io Docs",
	description: "Documentation for Slipmat.io platform v3",
	head: [
		["link", { rel: "icon", href: "/favicon.ico" }],
		[
			"script",
			{
				defer: "",
				src: "https://plausible.io/js/script.js",
				"data-domain": "docs.slipmat.io",
			},
		],
	],
	themeConfig: {
		// https://vitepress.dev/reference/default-theme-config
		nav: [
			{ text: "Home", link: "/" },
			{ text: "New Slipmat", link: "https://next.slipmat.io" },
			{ text: "Old Slipmat", link: "https://slipmat.io" },
			{ text: "Blog", link: "https://blog.slipmat.io" },
		],

		sidebar: [
			{
				text: "Guides",
				link: "/guides/",
				items: [
					{ text: "v3 Migration", link: "/guides/v3-migration/" },
					{ text: "Account", link: "/guides/account/" },
					{ text: "For Artists", link: "/guides/artists/" },
					{ text: "Technical", link: "/guides/technical/" },
				],
			},
			{
				text: "Reference",
				link: "/reference/",
				items: [
					// { text: 'Apps And Features', link: '/reference/features/' },
					{ text: "Frankie", link: "/reference/frankie/" },
					{ text: "Open Source", link: "/reference/open-source/" },
					{ text: "Glossary", link: "/reference/glossary/" },
				],
			},
			{
				text: "Development",
				link: "/development/",
				items: [
					{ text: "Contributing", link: "/development/contributing/" },
					{ text: "Changelog", link: "/development/changes/" },
				],
			},
		],

		socialLinks: [
			{ icon: "github", link: "https://github.com/slipmatio/docs" },
		],

		editLink: {
			pattern: "https://github.com/slipmatio/docs/edit/main/:path",
		},

		search: {
			provider: "local",
		},
	},
	appearance: "force-dark",
	lastUpdated: true,
	sitemap: {
		hostname: "https://docs.slipmat.io",
	},
});
