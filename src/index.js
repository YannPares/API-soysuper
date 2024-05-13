const express = require('express');
const { scraping } = require('./scrap.js');

const app = express()
const PORT = process.env.PORT || 3000;

app.get('/', async (req, res) => {
    const data = await scraping();
    const dataFormat = JSON.stringify(data, null, 2);
    res.setHeader('Content-Type', 'application/json'); 
    res.send(dataFormat); 
});

app.listen(PORT)
console.log("server is listening on port", PORT)
