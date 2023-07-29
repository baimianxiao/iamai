import nextra from 'nextra'

const withNextra = nextra({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.tsx',
  i18n: {
    locales: ['en', 'zh', 'ko', 'jp'],
    defaultLocale: 'en'
  },
  latex: true,
  flexsearch: {
    codeblocks: true
  },
  defaultShowCopyCode: true
})

export default withNextra({
  reactStrictMode: true,
  eslint: {
    // Eslint behaves weirdly in this monorepo.
    ignoreDuringBuilds: true
  },
  redirects: () => [
    {
      source: '/docs/guide/:slug(typescript|latex|tailwind-css|mermaid)',
      destination: '/docs/guide/advanced/:slug',
      permanent: true
    },
    {
      source: '/docs/docs-theme/built-ins/:slug(callout|steps|tabs)',
      destination: '/docs/guide/built-ins/:slug',
      permanent: true
    }
  ],
  webpack(config) {
    const allowedSvgRegex = /components\/icons\/.+\.svg$/

    const fileLoaderRule = config.module.rules.find(rule =>
      rule.test?.test('.svg')
    )
    fileLoaderRule.exclude = allowedSvgRegex

    config.module.rules.push({
      test: allowedSvgRegex,
      use: ['@svgr/webpack']
    })
    return config
  }
})