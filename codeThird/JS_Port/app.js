// Javascript
const { SerialPort } = require("serialport");
const fetch = require("node-fetch");
const { ReadlineParser } = require("@serialport/parser-readline");

const parser = new ReadlineParser({
  delimiter: "\r\n",
});

var port = new SerialPort({
  path: "COM7",
  baudRate: 9600,
  dataBits: 8,
  parity: "none",
  stopBits: 1,
  flowControl: false,
});

port.pipe(parser);

const mydata = [];

parser.on("data", function (data) {
  //console.log("Received data from port: " + data +"\n");
  let lines = data.split("\n");
  let importantLines = [];

  for (let i = 0; i < lines.length; i++) {
    setTimeout(() => {
      console.log("15 seconds have passed since fetching");
    }, 15000);
    if (lines[i].length > 20) {
      let parts = data.split(",");

      // Create an object and assign the values
      importantLines = [
        {
          id: parts[0].split("=")[1],
          lng: parseFloat(parts[2].split(" ")[0]),
          lat: parseFloat(parts[2].split(" ")[1]),
          heartbeats: parseFloat(parts[2].split(" ")[2]),
          temp: parseFloat(parts[2].split(" ")[3]),
        },
      ];

      console.log(importantLines);
      sendData(importantLines);

      importantLines.length = 0;
    }
  }
  
});



const sendData = async (data) => {
  try {
    const response = await fetch(
      "#######/drone.json",
      {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      }
    );

    if (!response.ok) {
      throw new Error("Sending data failed!");
    }

    const dataEnd = await response.json();
    console.log(dataEnd);

   
  } catch (error) {
    console.error("Error:", error);
  }
};
