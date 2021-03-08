require('dotenv').config({path: `/usr/app/environments/.env.${process.env.APP_ENV}`});

module.exports = () => {
    const isDevelopment = process.env.APP_ENV === 'development';
    const isProduction = process.env.APP_ENV === 'production';
    const isStaging = process.env.APP_ENV === 'staging';

    return {
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
            NEXT_PUBLIC_HOST_URL: isProduction ? 'https://odstresowani.pl' : 'http://localhost',
            NEXT_PUBLIC_HOST_API_URL: isProduction ? 'https://odstresowani.pl/api' : 'http://localhost/api',
            HOST_SSR_URL: isProduction ? 'https://nginx' : 'http://nginx',
            HOST_SSR_API_URL: isProduction ? 'https://nginx/api' : 'http://nginx/api'
        }
    }
}
