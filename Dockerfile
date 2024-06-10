FROM node

WORKDIR /app

COPY package*.json ./
RUN npm install
RUN npx playwright install
RUN apt-get update -q && \
    apt-get install -q -y libasound2 libatk-bridge2.0-0 libnss3 xdg-utils libcups2 libgbm1 
    
RUN apt-get install -y libxkbcommon0

COPY . .

EXPOSE 3000

# RUN npm run test

CMD ["npm", "run", "dev"]