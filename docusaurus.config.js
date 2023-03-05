// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

// eslint-disable-next-line @typescript-eslint/no-var-requires
const lightCodeTheme = require("prism-react-renderer/themes/github");
// eslint-disable-next-line @typescript-eslint/no-var-requires
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "the picafe blog",
  tagline:
    "Wake up and smell the tech news, best enjoyed with a cup of coffee.",
  url: "https://picafe.dev",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",

  // GitHub pages deployment config
  organizationName: "picafe",
  projectName: "website",

  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },
  plugins: [],
  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          routeBasePath: "guides",
          editUrl: "https://github.com/picafe/picafe-blog/tree/main/",
        },
        blog: {
          showReadingTime: true,
          readingTime: ({ content, frontMatter, defaultReadingTime }) =>
            defaultReadingTime({ content, options: { wordsPerMinute: 300 } }),
          editUrl: "https://github.com/picafe/picafe-blog/tree/main/",
          feedOptions: {
            type: "all",
            copyright: `Copyright © ${new Date().getFullYear()} picafe blog`,
          },
        },
        theme: {
          customCss: [require.resolve("./src/css/styles.css")],
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: "img/banner.jpg",
      metadata: [
        {
          name: "description",
          content:
            "Wake up and smell the tech news, best enjoyed with a cup of coffee.",
        },
        {
          name: "keywords",
          content:
            "blog,tech,news,picafe,linux,hardware,software,productivity,apps,windows",
        },
        {
          name: "twitter:card",
          content: "summary_large_image",
        },
      ],
      colorMode: {
        defaultMode: "dark",
      },
      navbar: {
        hideOnScroll: false,
        title: "picafe blog",
        logo: {
          alt: "logo",
          src: "img/picafe-light.svg",
          srcDark: "img/picafe-dark.svg",
        },
        items: [
          { to: "/blog", label: "Blog", position: "left" },
          { to: "/guides", label: "Guides", position: "left" },
          { to: "/featured", label: "Featured", position: "left" },
        ],
      },
      footer: {
        style: "light",
        links: [
          {
            title: "Discover",
            items: [
              {
                label: "Home",
                to: "/",
              },
              {
                label: "Blog",
                to: "/blog",
              },
              {
                label: "Guides",
                to: "/guides",
              },
              {
                label: "Featured Apps",
                to: "/featured",
              },
            ],
          },
          {
            title: "Contact",
            items: [
              {
                label: "Email Us",
                href: "mailto:contact@picafe.dev",
              },
            ],
          },
        ],
        copyright: `Copyright © 2022-${new Date().getFullYear()} picafe blog`,
      },
      algolia: {
        appId: "LNRD4R1PWW",
        apiKey: "f3cb447c78446ce74a4aec184d27d543",
        indexName: "picafe",
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
