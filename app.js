const io = require('socket.io-client');
const socket = io.connect('http://localhost:7890');

socket.on('hello', () => {
  console.log('Hi!');
  socket.emit('Hi!');

  let countClient = 0;
  setInterval(() => {
    socket.emit('log', () => {
      console.log('check', countClient);
      countClient++;
    });
  }, 1000);
});