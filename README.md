# Web Scraping Application

This is an application for web scraping using Node.js and Playwright.

## Installation

### Manual with npm

1. Clone this repository:

    ```bash
    git clone https://github.com/YannPares/API-soysuper.git
    ```
*make sure that you are on correct directory*

2. Install dependencies:

    ```bash
    npm install
    ```

3. Run the application:

    ```bash
    npm run dev
    ```
4. Open manually localhost:3000/ on your browser or 

     ```bash
    curl http://localhost:3000/
    ```

5. Run aplication test:

    ```bash
    npm run test
    ```
    

### With Docker Compose

1. Clone this repository:

    ```bash
    git clone https://github.com/YannPares/API-soysuper.git
    ```


2. Run the application with Docker Compose:

    ```bash
    docker-compose up -d
    ```

3. Open localhost:3000/ on your browser or 

    ```bash
    curl http://localhost:3000/
    ```

## Usage

Once the application working on localhost, you can send scraping requests on URL/${here}. The URL for scraping should be passed as an argument when making the request to the application.

Your page will show something like this:

![Server Image](https://i.gyazo.com/08d1c454e6142a2e5669b53d88f03e7e.png)

*IMPORTANT* 

You'll have cache. When you load /10, you'll have loaded pages 1 through 10 into the cache. If you reload the page, you will empty the cache.

## License

This project is licensed under the MIT License. See the `LICENSE` file for more details.
