const express = require("express")
const path = require("path");
const port = process.env["PORT"] || 8000;
const app = express();

app.use(express.static(path.join(__dirname,"static")))
app.use(express.static(path.join(__dirname,"static","images")))
// app.use(express.static(__dirname + "/static"))
app.listen(port,function(){
    console.log("I am listening on port",port)
})