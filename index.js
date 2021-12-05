/**
 *
 * Primary file for the API
 *
 */
// Dependencies
const http = require("http");
const url = require("url");

//the server should respond to all requests with a string
const server = http.createServer((req, res) => {
  //Get the url and parse it
  const parsedUrl = url.parse(req.url, true);
  //Get the path
  const path = parsedUrl.pathname;
  const trimedPath = path.replace(/^\/+|\/+$/g, "");

  //Get the http method
  const method = req.method.toLowerCase();

  //Send the response
  res.end("It works");

  // log the request path
  console.log(`Request for ${trimedPath} received with method: ${method}`);
});

// Start the server and have it listen on port 3000
server.listen(3000, () => {
  console.log("The server is listening on port 3000");
});
