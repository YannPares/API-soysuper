const { chromium } = require('playwright');


async function scraping (...pagination) {
    const browser = await chromium.launch({ headless: true });
    const page = await browser.newPage();

    await page.goto(`https://news.ycombinator.com/?p=${pagination}`);

    const elements = await page.$$eval('.athing', (results) => (
    results.map((el) => {

        const title = el.querySelector('.title a')?.innerText;
        if (!title) return null;
        const points = el.nextElementSibling.querySelector('.score')?.innerText;
        const send_by = el.nextElementSibling.querySelector('.hnuser')?.innerText;
        const published = el.nextElementSibling.querySelector('.age')?.innerText;
        const comments =  el.nextElementSibling.querySelector('.subline > a:last-child')?.innerText;

        return { title, points, send_by, published, comments };
    })
)); 
    await browser.close();
    return elements;
};

module.exports = { scraping };


