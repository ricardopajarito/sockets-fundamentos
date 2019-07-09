const express = require('express');
//socket trabaja con http
//que trae por defecto node
const socketIO = require('socket.io');
const http = require('http');

const path = require('path');

//socket io no trabaja directamente
//sobre esta aplicacion de express
const app = express();
//app ya trae http lo ejecuta en express()
// servidor con toda la configuracion
//que se le va a hacer al express()
let server = http.createServer(app);


const publicPath = path.resolve(__dirname, '../public');
const port = process.env.PORT || 3000;

app.use(express.static(publicPath));

//inicializar el socketIO
// io = es la configuracion del backend
//conexion directa con el servidor
//let io = socketIO(server);
module.exports.io = socketIO(server);

//le digo al servidor que utilice mi archivo
//para los sockets
require('./socket/socket');



//se modifica debido a
// la variable let server = http.createServer(app);
server.listen(port, (err) => {

    if (err) throw new Error(err);

    console.log(`Servidor corriendo en puerto ${ port }`);

});