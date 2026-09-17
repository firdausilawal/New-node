// server.js - an API with Express
const express = require("express");
const app = express();

app.get("/api/posts", (req, res)=>{
    res.json([{ id: 1, title: "Hello"}]);
});

application.listen(3000);