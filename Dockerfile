FROM node:14

WORKDIR /app

COPY package*.json ./
RUN npm install
RUN npx playwright install
RUN apt-get update -q && \
    apt-get install -q -y libasound2 libatk-bridge2.0-0 libnss3 xdg-utils libcups2 libgbm1 
    
# RUN apt-get libxkbcommon

COPY . .

EXPOSE 3000

CMD ["npm", "run", "dev"]