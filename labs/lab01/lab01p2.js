/*
Create -> POST
READ -> GET
UPDATE -> PUT or PATCH
DELETE -> DELETE
*/

import http from "http";
import fs from "fs"; // Thisb lets us USE CRUD on files, folders and others

const server = http.createServer((req, res) => {
  // do something
  if (req.url === "/") {
    res.end("Hello world++++");
  
}else if (req.url === "/about") {
    res.end("Hello to the about page");
  
} else if (req.url === "/contact") {
    const data = fs.readFileSync("./html/contact.html");
    res.end(data);
  
} else if (req.url === "/methods") {
    
    if(req.method === "GET") {
      res.end("Hello to the GET method");
    
    } else if (req.method === "POST") {
      res.end("Hello to the POST method");
    
    } else if (req.method === "PUT") {
      res.end("Hello to the PUT method");
    }
    else 
    {res.end("404 page not found");
    } 
  }
});

server.listen(8000, () => {
  console.log(`http://localhost:8000`);
});
