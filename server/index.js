const express = require("express")

let app = express()

//serve index.html
app.use(express.static(__dirname + '/../client/public'))

app.listen(3000)