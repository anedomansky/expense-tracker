import {RouteConfig} from 'react-router-config';
import LandingPage from './components/landingpage/LandingPage';
import CategoryList from './components/category/CategoryList';
import ExpenseList from './components/expense/ExpenseList';

export const routes: RouteConfig[] = [
    {
        component: LandingPage,
        exact: true,
        path: '/'
    },
    {
        component: CategoryList,
        path: '/category/all'
    },
    {
        component: ExpenseList,
        path: '/expense/all'
    }
]
