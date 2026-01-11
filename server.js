const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const cors = require('cors');
const path = require('path');
const fs = require('fs');
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static('.'));

const db = new sqlite3.Database('farmquest.db');

let schema = '';
try {
    schema = fs.readFileSync('sch.sql', 'utf8');
    db.exec(schema);
} catch(e) {
    console.log('sch.sql не найден, создаём таблицы вручную');
    db.exec(fs.readFileSync('sch.sql', 'utf8') || `CREATE TABLE IF NOT EXISTS users (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        username TEXT UNIQUE NOT NULL,
        coins INTEGER DEFAULT 100
    ); CREATE TABLE IF NOT EXISTS players (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        user_id INTEGER NOT NULL,
        name TEXT NOT NULL,
        class TEXT NOT NULL,
        coins INTEGER DEFAULT 100
    );`);
}

app.post('/api/login', (req, res) => {
    const {username = 'guest'} = req.body;
    db.get('SELECT * FROM users WHERE username = ?', [username], (err, user) => {
        if (!user) {
            db.run('INSERT INTO users (username, coins) VALUES (?, 100)', [username], function() {
                res.json({id: this.lastID, username, coins: 100});
            });
        } else {
            res.json(user);
        }
    });
});

app.get('/api/coins/:username', (req, res) => {
    db.get('SELECT coins FROM users WHERE username = ?', [req.params.username], (err, row) => {
        res.json({coins: row ? row.coins : 100});
    });
});

app.listen(3000, () => {
    console.log('🚀 FarmQuest: http://localhost:3000');
});
