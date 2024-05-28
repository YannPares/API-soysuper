const express = require('express');
const { scraping } = require('./scrap.js');

const app = express()
const PORT = process.env.PORT || 3000;

let isPageReload = false;

app.use((req, res, next) => {
    if (req.headers['cache-control'] === 'max-age=0') {
        isPageReload = true;
    } else {
        isPageReload = false;
    }
    next();
});

let cache = {}

app.get(['/:page', '/', '*'], async (req, res) => {

    if (isPageReload) {
        cache = {}
    }
    
    let page = req.params.page || 1

    let scrapingPromises = [];

    for (let i = 1; i <= page; i++) {
        if (!cache[i]) {
            const dataPromise = scraping(i)
                .then(data => {
                    cache[i] = data;
                })
                .catch(error => {
                    console.error('error caching data', error)
                })

            scrapingPromises.push(dataPromise)
        }
    }

    await Promise.all(scrapingPromises)

    let showPage = []
    for (let i = 1; i <= page; i++) {
        if (cache[i]) {
            showPage = showPage.concat(cache[i]);
        }
    }

    const dataFormat = JSON.stringify(showPage, null, 2);
    res.setHeader('Content-Type', 'application/json');
    res.send(dataFormat);

});
app.listen(PORT)
console.log("server is listening on port", PORT)