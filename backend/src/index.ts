import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import sqlite3 from 'sqlite3';
import dotenv from 'dotenv';
import chalk from 'chalk';
import { categoryRoutes } from './routes/categoryRoutes';
import { expenseRoutes } from './routes/expenseRoutes';

dotenv.config();
sqlite3.verbose();

const PORT = process.env.PORT || 4001;
const dbFilename = process.env.DB || '../db.sqlite3';

const db = new sqlite3.Database(dbFilename, (error): void => {
    if (error) {
        console.trace(chalk.red('> Could not connect to database.', error));
    } else {
        console.log(chalk.green('> Connected to database.'));
    }
});

db.get('PRAGMA foreign_keys = ON');

db.serialize(() => {
    db.run('CREATE TABLE IF NOT EXISTS expense (id INTEGER PRIMARY KEY AUTOINCREMENT, description TEXT, amount REAL, category TEXT, date DATETIME DEFAULT current_timestamp, FOREIGN KEY (category) REFERENCES category (name))',
        (error): void => {
            if (error) {
                console.trace(chalk.red('> Could not create the table.', error));
            } else {
                console.log(chalk.green('> Created the table.'));
            }
        });
    db.run('CREATE TABLE IF NOT EXISTS category (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT UNIQUE)',
        (error): void => {
            if (error) {
                console.trace(chalk.red('> Could not create the table.', error));
            } else {
                console.log(chalk.green('> Created the table.'));
            }
        });
    db.close((error): void => {
        if (error) {
            console.trace(chalk.red('> Could not disconnect from the database.', error));
        } else {
            console.log(chalk.green('> Disconnected from the database.'));
        }
    });
});

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use('/category', categoryRoutes);
app.use('/expense', expenseRoutes);

app.listen(PORT, () => {
    console.log(chalk.blue(`> Server is running on http://localhost:${PORT}`));
});
