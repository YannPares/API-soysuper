const { scraping } = require('./scrap.js');

describe('Verifying if scraping returns data', () => {
    test('should return data', async () => {
        const data = await scraping()
        expect(data).not.toBeNull();
    });
});

describe('Verifying if scraping returns an array data', () => {
    test('should return an array', async () => {
        const data = await scraping()
        expect(Array.isArray(data)).toBe(true);
    });
});

describe('Verifying that data contains all properties', () => {
    test('should return all properties', async () => {
        const data = await scraping()
        data.forEach(item => {
            expect(item).toHaveProperty('title');
            expect(item).toHaveProperty('points');
            expect(item).toHaveProperty('send_by');
            expect(item).toHaveProperty('published');
            expect(item).toHaveProperty('comments');
        });
    });
});

