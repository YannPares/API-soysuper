const express = require('express');
const { scraping } = require('./scrap.js');

const app = express()
const PORT = process.env.PORT || 3000;

let cache = {}

app.get(['/:page','/', '*'], async (req, res) => {
    
    let page = req.params.page || 1
    console.log(page)

    for (let i = 1; i <= page; i++ ){
        if (!cache[i]){
            const data = await scraping(i);
            cache[i] = data;
            console.log(i)  
        }
    }
    const data = cache[page]
    console.log(data)
    const dataFormat = JSON.stringify(data, null, 2);
    res.setHeader('Content-Type', 'application/json');    
    res.send(dataFormat); 
     
});

app.listen(PORT)
console.log("server is listening on port", PORT)