import express from "express";

const app = express();

app.use("/",(req,res) => {

    

    res.send("hi there");

});

app.listen(3000);