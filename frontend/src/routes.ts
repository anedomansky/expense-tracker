import {RouteConfig} from 'react-router-config';
import LandingPage from './components/landingpage/LandingPage';

export const routes: RouteConfig[] = [
    {
        component: LandingPage,
        exact: true,
        path: '/'
    }
]
