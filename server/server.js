const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

app.use('/', express.static('public'));

app.get('/hello', (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.send('Hello World!');
});

app.get('/budget', (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    var budget = require('./budget-data.json');
    res.json(budget);
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});