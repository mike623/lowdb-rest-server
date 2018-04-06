const path = require('path')
const express = require('express')
const bodyParser = require('body-parser')
const lowdbApi = require('lowdb-api')

const app = express()
const file = path.join(__dirname, './db.json')
const options = {}

app.use(bodyParser.json())

app.get('/db/download', function(req, res) {
  res.download(file)
})

app.use(lowdbApi(file, options))



const port = process.env.PORT || 3000;
app.listen(port, ()=>{
  console.log(`Serving at http://localhost:${port}`);
});