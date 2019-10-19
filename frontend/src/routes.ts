import {RouteConfig} from 'react-router-config';
import LandingPage from './components/landingpage/LandingPage';
import ExpenseList from './components/expense/ExpenseList';
import ExpenseAdd from './components/expense/ExpenseAdd';
import CategoryList from './components/category/list/CategoryList';
import CategoryAdd from './components/category/add/CategoryAdd';

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
