/**
 * @fileoverview	./index.js
 *
 * @version         1.0
 *
 * @author          Nicolás Garcia <nicolasgarciacomp@gmail.com>
 *
 * History
 * v1.0 – Se creó el archivo
**/

// Requires
const express = require('express');
const http = require('http');
const path = require('path');

const app = express();
let server = http.createServer(app);

const publicPath = path.resolve(__dirname, './public');
const port = process.env.PORT || 3001;

app.use(express.static(publicPath));

server.listen(port, (err) => {
    if(err) throw new Error(err);
    console.log(`Servidor corriendo en puerto ${ port }`);
});
