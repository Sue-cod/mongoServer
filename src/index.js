import express from 'express';
const PORT = 5000;

const app = express();


app.listen(PORT, error => {
    if (error) return console.log(error);
    console.log(`Server is listening on port ${PORT}`);
});