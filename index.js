require('dotenv').config()
const express = require("express");
const app = express();
const port = 5000;

app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.get("/facebook", (req, res) => {
    res.send("Gautam Einstein_Baba");
})

app.get("/collage", (req, res) => {
    res.send("<h1>This is the collage time</h1>")
})

app.get("/code", (req,res) => {
    res.send("<h2>This is the coding time</h2>")
})

app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${port}`);
});
