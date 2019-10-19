import express from 'express';
import { db } from '..';
import { ICategory } from '../interfaces/ICategory';

export const categoryRoutes = express.Router();

categoryRoutes.route('/').get((req, res) => {
  /*
  User.find((err, users) => {
  if (err) {
    throw new Error(err);
  }
  res.json(users);
});
  */
  const sql = 'SELECT * FROM category';
  db.all(sql, (error, rows: ICategory[]) => {
    if (error) {
      console.error(error);
    }
    return rows;
  })
});

categoryRoutes.route('/add').post((req, res) => {

});

categoryRoutes.route('/update').post((req, res) => {

});

categoryRoutes.route('/delete').post((req, res) => {

});
