const express = require("express");
const app = express();


app.use(express.json()) // res.json(req.body) use here  
app.get("/" , (req, res)=>{
    res.json([{
        id : "1",
        "name" : "Deepika",
        "age" : 34
    },
    {
        id : "2",
        name : "Priyanka",
        age : 30
    },
    {
        id : "3",
        name : "Nirmala",
        age : 35
    },


]);
})
app.listen(3000 , ()=>{
    console.log("app is running on 3000");
})