// Application code here

document.addEventListener("DOMContentLoaded", function(event) {
  documentLoad();
});


function documentLoad() {
    var button = document.getElementById('sendButton');
    var message = document.getElementById('messageText');

    button.addEventListener('click', function(event) {
      socket.send( message.value );
    });

    setInterval(reloadMessageListing, 1000);
}


function reloadMessageListing() {
  socket.send( '@reload' );
}
