import express from 'express';
import { ICategory } from '../interfaces/ICategory';
import sqlite3 from 'sqlite3';
import chalk from 'chalk';
import { ISuccessMessage } from '../interfaces/ISuccessMessage';

export const categoryRoutes = express.Router();
const dbFilename = process.env.DB || '../db.sqlite3';

categoryRoutes.route('/all').get((req, res) => {
  const db = new sqlite3.Database(dbFilename, sqlite3.OPEN_READONLY);
  const sql = 'SELECT * FROM category';
  db.all(sql, (error, rows: ICategory[]) => {
    if (error) {
      console.trace(chalk.red(error));
    }
    console.table(rows);
    res.send(rows);
  });
  db.close();
});

categoryRoutes.route('/add').post((req, res) => {
  const db = new sqlite3.Database(dbFilename, sqlite3.OPEN_READWRITE);
  const sql = 'INSERT INTO category(id, name) VALUES(NULL, ?)';
  db.run(sql, req.body.name, (error) => {
    if (error) {
      console.trace(chalk.red(error));
    }
    console.log(chalk.green(`Added new category: ${req.body.name}`));
    const response: ISuccessMessage = {
      success: 'Added new category!',
    };
    res.status(200).send(response);
  });
  db.close();
});

categoryRoutes.route('/update').post((req, res) => {

});

categoryRoutes.route('/delete').post((req, res) => {
  const db = new sqlite3.Database(dbFilename, sqlite3.OPEN_READWRITE);
  const sql = 'DELETE FROM category WHERE id = ?';
  db.run(sql, req.body.id, (error) => {
    if(error) {
      console.trace(chalk.red(error));
    }
    console.log(chalk.green(`Removed category with the id: ${req.body.id}`));
    const response: ISuccessMessage = {
      success: 'Removed the category!',
    };
    res.status(200).send(response);
  })
});
