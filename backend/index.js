const express = require('express');
const cors = require('cors')
const parser = require('body-parser')

const server = express();
server.use(cors());
server.use(parser.json());

server.get('/api/v1/get', (req, res) => {
    res.json({
        'name': 'ala',
        'value': 50
    })
});


server.listen(8080, () => {
    console.log("Server listening on port 8080");
});