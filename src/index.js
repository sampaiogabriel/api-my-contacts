const express = require('express');

const app = express();

app.get('/', (req, res) => {
    response.send('hello world')
})

app.listen(300, () => console.log('Server started at http://localhost:3000'));