// Javascript
const { SerialPort } = require("serialport");

const { ReadlineParser } = require("@serialport/parser-readline");

const parser = new ReadlineParser({
  delimiter: "\r\n",
});

var port = new SerialPort({
  path: "COM5",
  baudRate: 9600,
  dataBits: 8,
  parity: "none",
  stopBits: 1,
  flowControl: false,
});

port.pipe(parser);

parser.on("data", function (data) {
  console.log("Received data from port: " + data +"\n");
});
