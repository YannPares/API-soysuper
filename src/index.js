import express from 'express'
import { scraping } from './scrap.mjs';

const app = express()
const PORT = process.env.PORT || 3000;

app.get('/', async (req, res) => {
    const data = await scraping();
    const dataFormat = JSON.stringify(data, null, 2)
    res.send(dataFormat)
});

app.listen(PORT)
console.log("server is listening on port", PORT)
