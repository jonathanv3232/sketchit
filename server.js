const express = require('express');
const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);

app.use(express.static(__dirname + '/public'));

const onConnection = socket => {
  console.log('CONNECTED');
  socket.on('drawing', data => socket.broadcast.emit('drawing', data));
};

io.on('connection', onConnection);

server.listen(process.env.PORT || 3000, () => console.log(`listening on port ${server.address().port}`));
