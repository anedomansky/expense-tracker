import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage: React.FC = () => (
    <div>
        <p>LandingPage works!</p>
        <Link to="/category/all">/category/all</Link>
        <br />
        <Link to="/expense/all">/expense/all</Link>
    </div>
);

export default LandingPage;
