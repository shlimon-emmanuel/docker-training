const express = require('express');
const mysql = require('mysql2');
const app = express();

const connection = mysql.createConnection({
    host: 'database',
    user: 'root',
    password: 'root',
    database: 'projetdb'
});

app.get('/', (req, res) => {
    res.json({ message: 'Bienvenue sur l\'API!' });
});

app.get('/api/status', (req, res) => {
    connection.query('SELECT NOW() as now', (error, results) => {
        if (error) {
            res.status(500).json({ error: 'Erreur de connexion à la base de données' });
            return;
        }
        res.json({ 
            status: 'OK',
            time: results[0].now
        });
    });
});

app.listen(3000, () => {
    console.log('Backend démarré sur le port 3000');
}); 