require('dotenv').config();

const devConfig = {
    env: {
        API_URL: process.env.DEV_API_URL,
    }
}

const prodConfig = {
    env: {
        API_URL: process.env.PROD_API_URL,
    }
}

const config = process.env.NODE_ENV === 'development' ? devConfig : prodConfig;

module.exports = {
    ...config,
    distDir: 'out'
}