import express from "express";

const app = express();
const logger = (req, res, next) => {
    console.log(req.url)
    console.log(req.method)
    console.log(Date())
    next();
}

const newMiddleware = (req, res, next) => {
    console.log("hello")
    next();
}


app.get("/", logger, (req, res)=>{ // specific routing
    
    res.send("Welcome to the server")

});

app.use(logger); // throughout the app

app.listen(3000)