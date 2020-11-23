// Comando para establecer la conexion
var socket = io();

var label = $('#lblNuevoTicket');

socket.on('connect', function() {
    console.log('Conectado al servidor');

});

//escuchar
socket.on('disconnect', function() {
    console.log('Conección perdida con el servidor');
});

//  on 'estadoActual'
socket.on('estadoActual', function(resp) {
    console.log(resp);
    label.text(resp.actual);
});
// 

$('button').on('click', function() {

    // console.log('click');
    socket.emit('siguienteTicket', null, function(siguienteTicket) {

        label.text(siguienteTicket);

    });

});