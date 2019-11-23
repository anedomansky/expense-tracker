import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/App';
import { BrowserRouter } from 'react-router-dom';
import './index.scss';

// needed in order to enable HMR
declare let module: __WebpackModuleApi.Module;

ReactDOM.render(
    <BrowserRouter><App /></BrowserRouter>,
    document.getElementById('app')
);

// enable HMR for the client side app
if (module.hot) {
    module.hot.accept();
}
