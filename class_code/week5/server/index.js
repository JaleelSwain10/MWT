import express from "express";
import cors from "cors";

const app = express();
const PORT = process.env.PORT || 8000;

// middleware
app.use(cors());

// home route 
app.get("/",(req, res)=>{
    res.send("Welcome to the server")
})

app.get("/data",(req, res)=>{
    let user01 = {
        name: "Jaleel",
        email: "jaleelswain10@gmail.com",
        age: 27,
        bio: "i dont know either man"
    }
    res.status(404)(user01)
});

app.listen(PORT, () =>{
    console.log(`http://localhost:${PORT}`)
});

app.use("", (req, res) => {
    res.status(404).send("404 page not found")
})