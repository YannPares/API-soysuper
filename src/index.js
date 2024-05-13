const express = require('express');
const { scraping } = require('./scrap.js');

const app = express()
const PORT = process.env.PORT || 3000;

app.get(['/:page','/'], async (req, res) => {
    
    let page = req.params.page
    console.log(page)
    
    const data = await scraping(page);
    const dataFormat = JSON.stringify(data, null, 2);
    res.setHeader('Content-Type', 'application/json'); 
    res.send(dataFormat); 
});

app.listen(PORT)
console.log("server is listening on port", PORT)