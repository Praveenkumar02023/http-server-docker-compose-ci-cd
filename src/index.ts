import express from "express";
import {prisma} from "./lib/prisma.js"

const app = express();

app.use("/",async (req,res) => {

    const user = await prisma.user.create({

        data:{
            name : Math.random().toString(),
            email : Math.random().toString()
        }

    });
    
    res.send("hi there");

});

app.listen(3000);