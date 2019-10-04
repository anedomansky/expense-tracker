if(!process.env.NODE_ENV) {
    process.env.NODE_ENV = 'development';
}

import express from 'express';
import open from 'open';
import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import webpackConfig from './webpack.dev.config';
import dotenv from 'dotenv';

dotenv.config();

const PORT = process.env.PORT || 4000;
// only opens the browser automatically if a value is set -> !true === false, !'' === false
const autoOpenBrowser = !!process.env.AUTO_OPEN_BROWSER;
const app = express();
const compiler = webpack(webpackConfig);

app.use(webpackHotMiddleware(compiler, {
    log: false
}));

app.use(webpackDevMiddleware(compiler, {
    publicPath: webpackConfig.output!.publicPath!,
    writeToDisk: true,
    logLevel: 'error'
}));

const URL = `http://localhost:${PORT}`;

app.listen(PORT, () => {
    if(autoOpenBrowser) {
        open(URL);
    }
})
