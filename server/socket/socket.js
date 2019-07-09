const { io } = require('../server');

io.on('connection', (client) => {
    //client tiene toda la informacion
    //de la comunicacion que se establecio
    console.log('Usuario conectado');
    client.emit('enviarMensaje', {
        usuario: 'Admin',
        mensaje: 'Bienvenido cliente'
    });

    client.on('disconnect', () => {
        console.log('Usuario desconectado');
    });

    //escuchar al cliente
    //mensaje es el objeto que va a recibir
    //el servidor por parte del cliente
    client.on('enviarMensaje', (data, callback) => {
        console.log(data);

        client.broadcast.emit('enviarMensaje', data);

        // if (mensaje.usuario) {
        //     callback({
        //         resp: `Todo bien ${mensaje.usuario}`
        //     });
        // } else {
        //     callback({
        //         resp: 'Esperaba que mandaras el usuario beibi'
        //     });
        // }

    });

});