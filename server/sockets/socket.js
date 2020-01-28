//importando el objeto "io" que esta en el archivo server
const { io } = require('../server');


//saber si un usuario se conecta al server
io.on('connection', (client) => {
    console.log('Usuario conectado');

    //saber si un usario se desconecta
    client.on('disconnect', () => {
        console.log('Usuario desconectado');
    })

    //esuchar al cliente
    client.on('enviarMensaje', (data, callback) => {
        console.log(data);

        client.broadcast.emit('enviarMensaje', data);
        // if (mensaje.usuario) {
        //     callback({
        //         resp: 'TODO SALIÓ BIEN!'
        //     });
        // } else {
        //     callback({
        //         resp: 'TODO SALIÓ MAL!!!!!!!!'
        //     });

        // }
    })

    //enviar información
    client.emit('enviarMensaje', {
        usuario: 'Administrador',
        mensaje: 'Bienvenido a esta aplicación'
    })
});