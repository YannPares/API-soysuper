import express from 'express'
import { scraping } from './scrap.mjs';

const app = express()
const PORT = process.env.PORT || 3000;

app.get('/', async (req, res) => {
    const data = await scraping();
 
    res.json(data);
        
 });

app.listen(PORT)
console.log("server is listening on port", PORT)
