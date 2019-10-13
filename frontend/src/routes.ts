import {RouteConfig} from 'react-router-config';
import LandingPage from './components/landingpage/LandingPage';
import CategoryList from './components/category/CategoryList';
import ExpenseList from './components/expense/ExpenseList';
import CategoryAdd from './components/category/CategoryAdd';
import ExpenseAdd from './components/expense/ExpenseAdd';

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
        component: CategoryAdd,
        path: '/category/add'
    },
    {
        component: ExpenseList,
        path: '/expense/all'
    },
    {
        component: ExpenseAdd,
        path: '/expense/add'
    }
]
