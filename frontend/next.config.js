require('dotenv').config({path: `./environments/.env.${process.env.APP_ENV}`});

module.exports = {
    webpackDevMiddleware: config => {
        config.watchOptions = {
            poll: 1000,
            aggregateTimeout: 300,
        }

        return config
    },
    generateBuildId: async () => {
        return 'frontend'
    },
    env: {
        NEXT_PUBLIC_HOST_URL: process.env.NEXT_PUBLIC_HOST_URL,
        NEXT_PUBLIC_HOST_API_URL: process.env.NEXT_PUBLIC_HOST_API_URL,
        HOST_SSR_URL: process.env.HOST_SSR_URL,
        HOST_SSR_API_URL: process.env.HOST_SSR_API_URL
    },

    i18n: {
        locales: ['en', 'pl'],
        defaultLocale: 'pl'
    }
}
