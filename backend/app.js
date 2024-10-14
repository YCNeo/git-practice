require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
app.set('trust proxy', true);


app.get('/', (req, res) => {
    res.send('Hello World!');
})

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
})
