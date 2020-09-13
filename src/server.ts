import express from 'express';

const app = express();

app.get('/', (request, response) => {
    return response.json({message: "Hello World"}).status(201);
});

app.listen(3333);