import { chromium } from "playwright";

(async () => {
    const browser = await chromium.launch({ headless: true });
    const page = await browser.newPage();

    await page.goto('https://news.ycombinator.com/');

   

    const elements = await page.$$eval('tr.athing', (results) => (
    results.map((el) => {

        const title = el.querySelector('.title a')?.innerText;
        if (!title) return null;

        const points = el.nextElementSibling.querySelector('.score')?.innerText;

        const send_by = el.nextElementSibling.querySelector('.hnuser')?.innerText;

        const published = el.nextElementSibling.querySelector('.age')?.innerText;

        const comments = el.nextElementSibling.querySelector('.subtext').innerText;
        

        return { title, points, send_by, published, comments };
    })
));

    console.log(elements);
    await browser.close();
})();
