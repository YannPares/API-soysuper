import { chromium } from "playwright";

(async () => {
    const browser = await chromium.launch({ headless: true });
    const page = await browser.newPage();

    await page.goto('https://news.ycombinator.com/');



    const elements = await page.$$eval('tbody', (results) => (
        results.map((el) => {

            const title = el.querySelector('.titleline')?.innerText;
            if (!title) return null;

            const points = el.querySelector('.subtext')?.innerText;

            const send_by = el.querySelector('.hnuser')?.innerText;

            const published = el.querySelector('.age')?.innerText;

            // comments
            

            return { title, points, send_by, published };
        })
    ));

    console.log(elements);
    await browser.close();
})();
