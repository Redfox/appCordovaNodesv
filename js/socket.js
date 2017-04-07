document.addEventListener("deviceready", onDeviceReady, false);


function onDeviceReady() {
    console.log('Device is Ready')
        var socket = io.connect('192.168.0.102:2000');
        var soc = io();
        
        socket.on('connect', function () {
            console.log(socket.connected);
            alert('conect')
            socket.on('text', function (text) {
                console.log(text);
            });
        });
        
}


/*
function onDeviceReady() {
    var socket2 = plugin.socket.io.connect('192.168.0.102:3000');
    console.log(plugin);
    var socket = io.connect('192.168.0.102:3000');

    socket2.addEventListener('news', function(event) {
        // handle open event
        alert("a");
    });
    console.log(socket2)
    //console.log(plugin);
    socket.on('news', function (data) {
        //console.log(data.hello);
        //document.body.innerHTML += '<p>lol</p>';
    });

}

//https://github.com/wf9a5m75/plugin-socket.io.git*/