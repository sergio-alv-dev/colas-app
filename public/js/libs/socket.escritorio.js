// Comando para establecer la conexion
var socket = io();

// socket.on('connect', function() {
//     console.log('Conectado al servidor');

// });

// //escuchar
// socket.on('disconnect', function() {
//     console.log('Conección perdida con el servidor');
// });


var searchParams = new URLSearchParams(window.location.search);
if (!searchParams.has('escritorio')) {
    window.location = 'index.html';
    throw new Error('El escritorio es necesario');
}

var escritorio = searchParams.get('escritorio');
var label = $('small');

console.log(escritorio);

$('h1').text('Escritorio ' + escritorio);

$('button').on('click', function() {
    socket.emit('atenderTicket', { escritorio }, function(resp) {
        if (resp === 'No hay Tickets') {
            label.text(resp);
            alert(resp);
            return;
        }
        label.text('Ticket ' + resp.numero);
        // console.log(resp);
    });
});