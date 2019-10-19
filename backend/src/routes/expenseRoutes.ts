import express from 'express';

export const expenseRoutes = express.Router();

expenseRoutes.route('/').get((req, res) => {

});

expenseRoutes.route('/add').post((req, res) => {

});

expenseRoutes.route('/update').post((req, res) => {

});

expenseRoutes.route('/delete').post((req, res) => {

});
