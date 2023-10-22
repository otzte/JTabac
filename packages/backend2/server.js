// Load HTTP module
const http = require("http");

const hostname = "127.0.0.1";
const port = 8000;

let order = {
    productId: 1,
    donorId: 1,
    receiverId: 1,
    status: "created"
}

// Create HTTP server
const server = http.createServer(function (req, res) {
  // Set the response HTTP header with HTTP status and Content type
  res.writeHead(200, { "Content-Type": "application/json" });

  // Send the response body "Hello World"
  res.end(JSON.stringify(order));
});

// Prints a log once the server starts listening
server.listen(port, hostname, function () {
  console.log(`Server running at http://${hostname}:${port}/`);
});
