import express from "express";
import { prisma } from "./lib/prisma.js";

const app = express();

app.get("/", async (req, res) => {
  try {
    const user = await prisma.user.findFirst();
    res.json(user);
  } catch (err) {
    console.error(err);
    res.status(500).send("Error fetching user");
  }
});

app.get("/add", async (req, res) => {
  try {
    const user = await prisma.user.create({
      data: {
        name: Math.random().toString(),
        email: Math.random().toString(),
      },
    });

    res.json(user);
  } catch (err) {
    console.error(err);
    res.status(500).send("Error creating user");
  }
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});