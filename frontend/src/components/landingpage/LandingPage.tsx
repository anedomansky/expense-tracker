import React from 'react';
import { Link } from 'react-router-dom';
import './LandingPage.scss';

const LandingPage: React.FC = () => (
    <section className="landing-page">
        <h1>Welcome to your personal expense tracker!</h1>
        <h4>
            You can view all your expenses right
            <Link to="/expense/all" className="landing-page__link"> here</Link>
        </h4>
    </section>
);

export default LandingPage;
