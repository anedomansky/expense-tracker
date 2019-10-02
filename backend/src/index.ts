import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import sqlite3 from 'sqlite3';
import dotenv from 'dotenv';

dotenv.config();
sqlite3.verbose();

const PORT = process.env.PORT || 4001;
const dbFilename = process.env.DB || '../db.sqlite3';

const db = new sqlite3.Database(dbFilename, (error): void => {
    if (error) {
        console.error('> Could not connect to database.', error);
    } else {
        console.log('> Connected to database.');
    }
});

db.serialize(() => {
    db.run('CREATE TABLE IF NOT EXISTS expenses (id INTEGER PRIMARY KEY AUTOINCREMENT, expense_text TEXT, amount REAL, category TEXT)',
        (error): void => {
            if (error) {
                console.error('> Could not create the table.', error);
            } else {
                console.log('> Created the table.');
            }
        });
    db.close((error): void => {
        if (error) {
            console.error('> Could not disconnect from the database.', error);
        } else {
            console.log('> Disconnected from the database.');
        }
    });
});

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.listen(PORT, () => {
    console.log(`> Server is running on http://localhost:${PORT}`);
});
