import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage: React.FC = () => (
    <div>
        <p>LandingPage works!</p>
        <Link to="/category/all">Categories</Link>
        <br/>
        <Link to="/expense/all">Expenses</Link>
    </div>
);

export default LandingPage;
