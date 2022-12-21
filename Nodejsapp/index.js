const express = require('express')
const app = express()
const port = 3000

var os = require('os')
var hostname = os.hostname();

var pid = process.pid;

const appVersion = "1.0";

app.get('/', (req, res) => {

  var msg = `<h1>Hello There! This is my sample site for DevOps...</h1>
   <h2>
    Process ID: ${pid} <br> 
    Running on: ${hostname} <br>
    App Version: ${appVersion}
   </h2>`

  res.send(msg)
})

app.listen(port, () => {
  console.log(`Demo app listening at http://localhost:${port}`)
})
