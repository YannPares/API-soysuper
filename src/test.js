const { scraping } = require('./scrap.js');

describe('Verifying if scraping returns data', () => {
    test('should return data', async () => {
        const data = await scraping()
        expect(data).not.toBeNull();
    });
});