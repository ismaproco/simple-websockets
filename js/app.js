// Application code here
var button = document.getElementById('sendButton');
var message = document.getElementById('messageText');

document.addEventListener("DOMContentLoaded", function(event) {
  documentLoad();
});


function documentLoad() {


    button.addEventListener('click', function(event) {
      sendTextMessage();
    });

    setInterval(reloadMessageListing, 1000);
}


function reloadMessageListing() {
  socket.send( '@reload' );
}

function sendTextMessage() {
  socket.send( message.value );
  message.value = '';
}


$("#messageText").keyup(function (e) {
    if (e.keyCode == 13) {
      sendTextMessage();
    }
});
