// server.js
const express = require('express');
const { exec } = require('child_process');
const app = express();
const port = 8080;

app.use(express.static('webapp'));

app.listen(port,()=>{
  let url = 'http://127.0.0.1:'+ port;
  console.log('listening at ' + url);
  exec('start ' + url);
});
