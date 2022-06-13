const WebSocket = require("ws");
const wss = new WebSocket.Server({ port: 8000 });
console.log("Server Started...!!");
wss.on("connection", (ws) => {
  console.log("New Client Connected");

  ws.on("message", (data) => {
    console.log(`Message Recieved from Client: ${data}`);
    ws.send("Thanks for your Message..!! I will connect you soon");
  });

  ws.on("close", () => {
    console.log("Client disconnected");
  });
});
