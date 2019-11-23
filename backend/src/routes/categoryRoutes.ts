import express from 'express';
import { ICategory } from '../interfaces/ICategory';
import sqlite3 from 'sqlite3';

export const categoryRoutes = express.Router();
const dbFilename = process.env.DB || '../db.sqlite3';

categoryRoutes.route('/all').get((req, res) => {
  const db = new sqlite3.Database(dbFilename, sqlite3.OPEN_READONLY);
  const sql = 'SELECT * FROM category';
  db.all(sql, (error, rows: ICategory[]) => {
    if (error) {
      console.error(error);
    }
    console.info(rows);
    res.send(rows);
  });
  db.close();
});

categoryRoutes.route('/add').post((req, res) => {
  // TODO: implement me
});

categoryRoutes.route('/update').post((req, res) => {

});

categoryRoutes.route('/delete').post((req, res) => {

});
