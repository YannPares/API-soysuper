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
    let showPage = {}
    for (let i = 1; i <= page; i++){
        if (cache[i]) {
            showPage[i] = cache[i];
        }
    }

    console.log(cache)
    const dataFormat = JSON.stringify(showPage, null, 2);
    res.setHeader('Content-Type', 'application/json');    
    res.send(dataFormat); 
     
});

app.listen(PORT)
console.log("server is listening on port", PORT)