import express from "express";
const app = express();
const PORT = process.env.PORT || 8000

app.listen(PORT, ()=>{
    console.log(`http://localhost:${PORT}`)
})

app.get("/", (req, res)=>{
    res.send("Hello from the server");
});

app.post("/", (req, res)=>{
    res.send("Hello from the POST Request");
});

app.put("/", (req, res)=>{
    res.send("Hello from the PUT Request");
});

/*
DOMAIN: https://www.youtube.com/watch?v=wUwhoxge3WM&ab_channel=Zhoniin
ENPOINT: /watch
? - query object
v=wUwhoxge3WM&ab_channel=Zhoniin

req: {
    ip,
    OS,
    url,
    method,
    query (?)- for searching information on DB
    params, body
}
*/


// example of a query


app.get("/watch", (req, res)=>{
console.log(req.url);
console.log(req.query);
console.log(req.params);
console.log(req.body);
res.send("you got to the watch page endpoint");
});

// for params
app.get("/params/:itemID", (req, res)=>{
console.log(req.url);
console.log(req.query);
console.log(req.params);
console.log(req.body);
res.send("you got to the watch params endpoint");
});