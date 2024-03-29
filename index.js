/**
 *
 * Primary file for the API
 *
 */
// Dependencies
const http = require("http");
const url = require("url");
const StringDecoder = require("string_decoder").StringDecoder;

//the server should respond to all requests with a string
const server = http.createServer((req, res) => {
  //Get the url and parse it
  const parsedUrl = url.parse(req.url, true);
  //Get the path
  const path = parsedUrl.pathname;
  const trimedPath = path.replace(/^\/+|\/+$/g, "");

  //Get the http method
  const method = req.method.toLowerCase();

  //Get the query string as an object
  const queryStringObject = parsedUrl.query;

  //Get the headers as an object
  const headers = req.headers;

  //Get the payload, if any
  const decoder = new StringDecoder("utf-8");
  let buffer = "";
  req.on("data", (data) => {
    buffer += decoder.write(data);
  });
  req.on("end", () => {
    buffer += decoder.end();

    //send the response
    res.end("It works");

    //log the request path
    console.log(`Request buffer: ${buffer}`);
  });
});

// Start the server and have it listen on port 3000
server.listen(3000, () => {
  console.log("The server is listening on port 3000");
});
