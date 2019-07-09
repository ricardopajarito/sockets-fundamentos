        //configuracion del frontend
        // se puede usar una funcion anonima
        //para protejer a socket
        var socket = io();

        //on escuchar informacion
        socket.on('connect', function() {
            console.log('Conectado al servidor');
        });

        socket.on('disconnect', function() {
            console.log('Se perdio la conexion con el servidor');
        });

        //mensaje del cliente para que el servidor lo escuche
        //emit enviar informacion
        //emit(nombreobjeto, objeto, funcion si lo entrego)
        socket.emit('enviarMensaje', {
            usuario: 'Ricardo',
            mensaje: 'Hola servidor'
        }, function(resp) {
            //resp es la respuesta del server al recibir el callback
            //console.log('Se disparo el callback');
            console.log('respuesta del server: ', resp);

        });

        //Escuchar informacion
        //recibo una funcion
        socket.on('enviarMensaje', function(mensaje) {
            console.log('Servidor: ', mensaje);
        });