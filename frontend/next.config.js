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
        NEXT_PUBLIC_HOST_URL: 'https://odstresowani.pl',
        NEXT_PUBLIC_HOST_API_URL: 'https://odstresowani.pl/api',
        HOST_SSR_URL: 'https://nginx',
        HOST_SSR_API_URL: 'https://nginx/api'
    },

    i18n: {
        locales: ['en', 'pl'],
        defaultLocale: 'pl'
    }
}
