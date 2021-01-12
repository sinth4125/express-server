//const { Socket } = require('dgram');
var app  = require('express')();
var http = require('http').Server(app);
var io =  require('socket.io')(http);

app.get('/',(req,res) => {
    //res.end('test node');
    res.sendFile(__dirname + '/index.html')
})

io.on('connection', (socket) => {
    console.log('user connection');

    socket.on('chat message',(msg) =>{
        console.log('message : ' + msg );

        //rp
        io.emit('chat message', msg);
    })

})

http.listen(3000, function(){
    console.log('listen on post 3000')
})