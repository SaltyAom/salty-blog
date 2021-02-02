const { join, basename } = require('path')

const withOffline = require('next-offline')
const withAnalyze = require('@next/bundle-analyzer')({
    enabled: process.env.ANALYZE === 'true'
})
const withPreact = require('next-plugin-preact')
const withPlugins = require('next-compose-plugins')
const withStyles = require('@webdeb/next-styles')

const oneClassName = require('1-classname')

const MangleCssClassPlugin = require('mangle-css-class-webpack-plugin')

module.exports = withPlugins(
    [
        [withPreact],
        [withAnalyze],
        [
            withStyles,
            {
                sass: true,
                modules: true,
                cssLoaderOptions: {
                    getLocalIdent: (
                        loaderContext,
                        localIdentName,
                        localName,
                        options
                    ) => {
                        const filePath = loaderContext.resourcePath
                        const fileBaseName = basename(filePath)

                        if (/\.module\.sass$/.test(fileBaseName)) {
                            const modulePathParts = filePath.split('/')

                            const moduleName =
                                modulePathParts[modulePathParts.length - 2]

                            return `_${oneClassName(moduleName + localName)}`
                        }

                        return localName
                    }
                }
            }
        ],
        [
            withOffline,
            {
                workboxOpts: {
                    swDest: 'static/service-worker.js',
                    runtimeCaching: [
                        {
                            urlPattern: /^https?.*/,
                            handler: 'NetworkFirst',
                            options: {
                                cacheName: 'https-calls',
                                networkTimeoutSeconds: 15,
                                expiration: {
                                    maxEntries: 150,
                                    maxAgeSeconds: 6 * 60 * 60 // 6 hours
                                },
                                cacheableResponse: {
                                    statuses: [0, 200]
                                }
                            }
                        }
                    ]
                }
            }
        ]
    ],
    {
        async rewrites() {
            return [
                {
                    source: '/service-worker.js',
                    destination: '/_next/static/service-worker.js'
                },
                {
                    source: '/sitemap.xml',
                    destination: '/api/sitemap'
                }
            ]
        },
        experimental: {
            modern: true,
            polyfillsOptimization: true
        },
        images: {
            deviceSizes: [640, 750, 828, 1080],
            imageSizes: [16, 32, 48, 64],
            path: '/_next/image',
            loader: 'default'
        },
        webpack(config, options) {
            config.resolve.alias = {
                ...config.resolve.alias,
                '@pages': join(__dirname, 'src/pages'),
                '@layouts': join(__dirname, 'src/layouts'),
                '@components': join(__dirname, 'src/components'),
                '@styles': join(__dirname, 'src/styles'),
                '@services': join(__dirname, 'src/services'),
                '@models': join(__dirname, 'src/models'),
                '@blog': join(__dirname, 'blog'),
                '@contents': join(__dirname, 'blog/contents'),
                '@authors': join(__dirname, 'blog/authors'),
                '~': join(__dirname)
            }

            if (!options.isServer) {
                config.node = {
                    fs: 'empty'
                }
            }

            if (!options.dev) {
                config.plugins.push(
                    new MangleCssClassPlugin({
                        classNameRegExp:
                            '((hover|focus|xs|md|sm|lg|xl)[\\\\]*:)*tw-[a-z_-][a-zA-Z0-9_-]*',
                        ignorePrefixRegExp:
                            '((hover|focus|xs|md|sm|lg|xl)[\\\\]*:)*',
                        log: true
                    })
                )
            }

            return config
        }
    }
)
