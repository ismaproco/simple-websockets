var server = require('websocket').server, http = require('http');

var myArr = [];


var socket = new server({
    httpServer: http.createServer().listen(8066)
});

socket.on('request', function(request) {
    var connection = request.accept(null, request.origin);

    connection.on('message', function(message) {
      console.log(message.utf8Data);

      var messageString = '';
      
      if(message.utf8Data !== '@reload') {
        // add message to application array
        myArr.push(message.utf8Data);
      }

      myArr.forEach( function( content ) {
        messageString += content + '<br />';
      });


      connection.sendUTF( messageString );
    });

    connection.on('close', function(connection) {
        console.log('connection closed');
    });
});
