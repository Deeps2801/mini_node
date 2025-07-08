const express = require("express");
const app = express();


app.use(express.json()) // res.json(req.body) use here  
app.get("/" , (req, res)=>{
    res.json([{
        id : "1",
        name : "Deepika",
        age : 34,
        city : "panvel"

    },
    {
        id : "2",
        name : "Priyanka",
        age : 30,
        city : "new panvel"
    },
    {
        id : "3",
        name : "Nirmala",
        age : 35,
        city : "Mankhurd"
    },
    {
        id : "4",
        name : "Bhagyashree",
        age : 33,
        city : "Badlapur"
    }


]);
})
app.listen(3000 , ()=>{
    console.log("app is running on 3000");
})