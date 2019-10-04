import React from 'react';
import SideMenu from './layout/SideMenu';
import Footer from './layout/Footer';
import { renderRoutes } from 'react-router-config';
import { routes } from '../routes';
import Header from './layout/Header';
import '../styles/App.scss';

const App: React.FC = () => (
    <div className="content">
        <Header/>
        <SideMenu/>
        <main>
            {renderRoutes(routes)}
        </main>
        <Footer/>
    </div>
);

export default App;
