FROM node

WORKDIR /app/

COPY /app/package*.json  /app/

RUN npm install

COPY . . 

WORKDIR /app/src/main 

EXPOSE 5173

CMD npm run dev -L