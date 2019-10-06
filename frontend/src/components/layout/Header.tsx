import React from 'react';
import '../../styles/Header.scss';
import cashImgUrl from '../../assets/money.png'; // TODO: get the real logo

const Header: React.FC = () => (
    <header>
        <img src={cashImgUrl} alt="Cash"/>
        <h1>Header</h1>
    </header>
);

export default Header;
