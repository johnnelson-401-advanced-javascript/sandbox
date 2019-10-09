const io = require('socket.io')(7890)

io.on('connection', socket => {
  socket.emit('hello');
  
  socket.on('Hi!', () => {
    console.log('Howdy');
  });

  let count = 0;
  socket.on('log', data => {
    count++;
    console.log(data, count);
  });
});

