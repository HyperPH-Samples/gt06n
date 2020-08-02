const net = require('net');
const gt06 = require('./gt06n.js');

const server = net
  .createServer((connection) => {
    console.log('client connected');
    connection.setEncoding('hex');
    connection.on('data', (data) => {
      let result = gt06.parse(data);
    });

    connection.on('end', () => {
      console.log('client disconnected');
    });
  })
  .listen(5023, () => {
    console.log(`Server running`);
  });
