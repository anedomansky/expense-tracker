import React from 'react';
import SideMenu from '../layout/side-menu/SideMenu';
import Footer from '../layout/footer/Footer';
import { renderRoutes } from 'react-router-config';
import { routes } from '../../routes';
import Header from '../layout/header/Header';
import './App.scss';

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
