const express = require('express');
const { scraping } = require('./scrap.js');

const app = express()
const PORT = process.env.PORT || 3000;

let cache = {}

app.get(['/:page', '/', '*'], async (req, res) => {

    let page = req.params.page || 1
    console.log(page)
    
        let scrapingPromises = [];
        
        for (let i = 1; i <= page; i++) {
            if (!cache[i]) {
                const dataPromise = scraping(i)
                .then(data => {
                    cache[i] = data;
                    console.log(i)
                })
                .catch(error => {
                    console.error('error caching data', error)
                })
                scrapingPromises.push(dataPromise)

            }
        }
        await Promise.all(scrapingPromises)
        
        let showPage = {}
        for (let i = 1; i <= page; i++) {
            if (cache[i]) {
                showPage[i] = cache[i];
            }
        }
    const dataFormat = JSON.stringify(showPage, null, 2);
    res.setHeader('Content-Type', 'application/json');
    res.send(dataFormat);

});

app.listen(PORT)
console.log("server is listening on port", PORT)