const express = require('express')
const app = express()

app.get("/", (req, res) => {
    res.send("<h2> Pranjal Sharma </h2>");
})

app.get("/about", (req, res) => {
    res.send("<h2> I'm about page </h2>");
})

app.get("/contact", (req, res) => {
    res.send("<h2> I'm contact page </h2>");
})

app.listen(3000, function (){
    console.log("Node js project has started at port 3000");
})