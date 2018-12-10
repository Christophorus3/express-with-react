const express = require("express")

let app = express()

//serve index.html
app.use(express.static(__dirname + '/../client'))
console.log(__dirname + '/../')
app.listen(3000)