import React from 'react';
import './SideMenu.scss';
import { Link } from 'react-router-dom';
import Assets from '../../../assets';

const SideMenu: React.FC = () => (
    <div className="sidenav">
        <Link to="/"><img className="sidenav__icon" src={Assets.calculatorIconUrl} alt="Calculator" /></Link>
        <h2>Want to see or input your expenses?</h2>
        <nav>
            <section className="expense">
                <div className="dropdown">
                    <button className="dropbtn" type="button">Expenses</button>
                    <div className="dropdown-content">
                        <Link to="/expense/all">List all expenses</Link>
                        <Link to="/expense/add">Add new expenses</Link>
                    </div>
                </div>
            </section>
            <section className="category">
                <div className="dropdown">
                    <button className="dropbtn" type="button">Categories</button>
                    <div className="dropdown-content">
                        <Link to="/category/all">List all categories</Link>
                        <Link to="/category/add">Add new category</Link>
                    </div>
                </div>
            </section>
        </nav>
    </div>
);

export default SideMenu;
