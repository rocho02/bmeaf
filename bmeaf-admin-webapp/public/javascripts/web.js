

function sendMessage(message,value){
    $.post( "/api/message", { message: message, value: value ? value: "" } );
}

function sendStart() {
    sendMessage('start');
}

function sendStop() {
    sendMessage('stop');
}

$(document).init(
    function () {
        $("#btn_start").on('click',sendStart);
        $("#btn_stop").on('click',sendStop);
    }
);