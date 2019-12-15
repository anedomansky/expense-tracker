import express from 'express';
import sqlite3 from 'sqlite3';
import chalk from 'chalk';
import { IExpense } from '../interfaces/IExpense';
import { ISuccessMessage } from '../interfaces/ISuccessMessage';

export const expenseRoutes = express.Router();
const dbFilename = process.env.DB || '../db.sqlite3';

expenseRoutes.route('/all').get((req, res) => {
    const db = new sqlite3.Database(dbFilename, sqlite3.OPEN_READONLY);
    const sql = 'SELECT * FROM expense';
    db.all(sql, (error, rows: IExpense[]) => {
        if (error) {
            console.trace(chalk.red(error));
        }
        console.table(rows);
        res.send(rows);
    });
    db.close();
});

expenseRoutes.route('/add').post((req, res) => {
    const db = new sqlite3.Database(dbFilename, sqlite3.OPEN_READWRITE);
    const sql = 'INSERT INTO expense(id, description, amount, date, category) VALUES(NULL, ?, ?, ?, ?)';
    db.run(sql, [req.body.description, req.body.amount, req.body.category, req.body.date], (error) => {
        if (error) {
            console.trace(chalk.red(error));
        }
        console.log(chalk.green(`Added new expense: ${req.body.description}`));
        const response: ISuccessMessage = {
            success: 'Added new expense!',
        };
        res.status(200).send(response);
    });
    db.close();
});

expenseRoutes.route('/update').post((req, res) => {

});

expenseRoutes.route('/delete').post((req, res) => {
    const db = new sqlite3.Database(dbFilename, sqlite3.OPEN_READWRITE);
});
