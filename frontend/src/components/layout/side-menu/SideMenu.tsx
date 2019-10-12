import React from 'react';
import './SideMenu.scss';
import { Assets } from '../../../assets';

const SideMenu: React.FC = () => (
    <div className="sidenav">
        <img className="sidenav__icon" src={Assets.calculatorIconUrl} alt="Calculator" />
        <h2>Want to see or input your expenses?</h2>
        <nav>
            <section className="expense">
                <div className="expense__dropdown">
                    <button className="dropbtn">Expenses</button>
                    <div className="dropdown-content">
                        <a href="#">List all expenses</a>
                        <a href="#">Add new expenses</a>
                    </div>
                </div>
            </section>
            <section className="category">
                <div className="category__dropdown">
                    <button className="dropbtn">Categories</button>
                    <div className="dropdown-content">
                        <a href="#">List all categories</a>
                        <a href="#">Add new category</a>
                    </div>
                </div>
            </section>
        </nav>
    </div>
);

export default SideMenu;
