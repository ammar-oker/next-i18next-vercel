const { i18n } = require('./next-i18next.config')

const FILE_SYSTEM_ROUTE_SOURCES = [
  '/secondPage',
];

const routes = [
  {
    source: `/en/second-page`,
    destination: '/en/secondPage',
    locale: false,
  },
  {
    source: `/de/zweite-seite`,
    destination: '/de/secondPage',
    locale: false,
  },
]

module.exports = {
  i18n,

  rewrites: async () => ({
    beforeFiles: [
      { source: '/:path*.map', destination: '/404' },
      ...FILE_SYSTEM_ROUTE_SOURCES.map(route => ({
        source: route,
        destination: '/404',
      })),
    ],
    afterFiles: [...routes],
  }),
}
