/* Import modules */
const withSourceMaps = require('@zeit/next-source-maps');
const withSass = require('@zeit/next-sass');
const withPlugins = require('next-compose-plugins');
const withCSS = require("@zeit/next-css");

/* Configuration */
const NextAppConfig = ({
    // config stuff goes here, no webpack loader config required
})

/* Export declaration */
module.exports = withPlugins([
    [withSourceMaps],
    [withCSS(withSass({
        webpack(config, options) {
            config.module.rules.push({
                test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
                use: {
                    loader: 'url-loader',
                    options: {
                        limit: 100000
                    }
                }
            });

            return config;
        }
    }))]
], NextAppConfig);