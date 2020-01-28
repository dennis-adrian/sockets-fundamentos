// Este es el mismo objeto "io" que tenemos en el backend
var socket = io();

//mensaje que avise cuando haya conexión con el servidor
socket.on('connect', function() {
    //codigo a ejecutar cuando haya conexión 
    console.log('Conectado al servidor');
});

socket.on('disconnect', function() {
    //codigo a ejecutar cuando se pierde la conexión
    console.log('Perdimos conexión con el servidor');
});

//enviar información 
socket.emit('enviarMensaje', {
    usuario: 'Dennis',
    mensaje: 'Hola Mundo!'
}, function(resp) {
    console.log('respuesta del servidor: ', resp);
});
//escuchar información
socket.on('enviarMensaje', function(mensaje) {
    console.log('Servidor: ', mensaje);
});