import express from "express";

const router = express.Router();

router.get('/name', (req, res)=>{
    res.send("Jaleel Swain");
});

router.get('/greeting',(req, res)=>{
    res.send("Hello, I'm Jaleel");
});

router.get('/add/:left/:right',(req, res)=>{
    console.log(req.params.left);
    let left = parseFloat(req.params.left);
    let right = parseFloat(req.params.right);

});
router.get('/calculate/:x/:y/:operator',(req, res)=>{
    let x = parseFloat(req.params.x);
    let y = parseFloat(req.params.y);
    let operator = req.params.operator;

    switch (operator) {
        case "+":
            return res.send(`${x + y}`);
        case "-":
            return res.send(`${x - y}`);
        case "*":
            return res.send(`${x * y}`);
        case "division":
            if (y !=0) {
                return res.send(`${x / y}`);
            } else {
                return res.send("y cannot be 0");
            }

            default:
                break;
            
    }
});
router.get("/",(req, res)=>{});

export default router;