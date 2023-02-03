const http = require('https');
const express = require('express');
const cors = require('cors')
const fs = require('fs')
const path = require('path')
const hostname = '127.0.0.1';
const port = 80;
var app = express();

app.use(cors())
app.use(express.static(path.join(__dirname, 'public/')))



app.get('/', function(req, res){
        let fileUrl;
        if (req.url == '/') fileUrl = '/index.html';
        else fileUrl = req.url;

        let filePath = path.resolve('./public' + fileUrl);
        const fileExt = path.extname(filePath);
        if (fileExt == '.html') {
            fs.exists(filePath, (exists) => {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'text/html');
                fs.createReadStream(filePath).pipe(res);
            });
        }
        else if (fileExt == '.css') {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'text/css');
            fs.createReadStream(filePath).pipe(res);
        } else if (fileExt == '.js') {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'text/javascript');
            fs.createReadStream(filePath).pipe(res);
        }
        console.log('accessed');
}); 

app.get('/media/spiderAnim.mov', function(req, res) {

  const stat = fs.statSync('./media/spiderAnim.mov')
  const fileSize = stat.size
  const range = req.headers.range
  if (range) {
    const parts = range.replace(/bytes=/, "").split("-")
    const start = parseInt(parts[0], 10)
    const end = parts[1] 
      ? parseInt(parts[1], 10)
      : fileSize-1
    const chunksize = (end-start)+1
    const file = fs.createReadStream('./media/spiderAnim.mov', {start, end})
    const head = {
       
      'Content-Range': `bytes ${start}-${end}/${fileSize}`,
      'Accept-Ranges': 'bytes',
      'Content-Length': chunksize,
      'Content-Type': 'video/mp4',
      'Access-Control-Allow-Origin': '*',
    }
    res.writeHead(206, head);
    file.pipe(res);
  } else {
    const head = {
      'Content-Length': fileSize,
      'Content-Type': 'video/mp4',
      'Access-Control-Allow-Origin': '*',

    }
    res.writeHead(200, head)
    fs.createReadStream('./media/spiderAnim.mov').pipe(res)
  } 
});
app.get('/media/imSplash.png', function(req, res) {
        res.sendFile(__dirname + './media/imSplash.png');

    /*const head = {
        'Content-Type': 'image/png',
      'Access-Control-Allow-Origin': '*'
    }    
    res.writeHead(200, head);*/
});
app.get('/media/FirstScene.mp4', function(req, res) {

  const stat = fs.statSync('./media/FirstScene.mp4')
  const fileSize = stat.size
  const range = req.headers.range
  if (range) {
    const parts = range.replace(/bytes=/, "").split("-")
    const start = parseInt(parts[0], 10)
    const end = parts[1] 
      ? parseInt(parts[1], 10)
      : fileSize-1
    const chunksize = (end-start)+1
    const file = fs.createReadStream('./media/FirstScene.mp4', {start, end})
    const head = {
       
      'Content-Range': `bytes ${start}-${end}/${fileSize}`,
      'Accept-Ranges': 'bytes',
      'Content-Length': chunksize,
      'Content-Type': 'video/mp4',
      'Access-Control-Allow-Origin': '*',
    }
    res.writeHead(206, head);
    file.pipe(res);
  } 
  else {
    const head = {      
        'Access-Control-Allow-Origin': '*',

      'Content-Length': fileSize,
      'Content-Type': 'video/mp4',

    }
    //res.writeHead(200, head)
    fs.createReadStream('./media/FirstScene.mp4').pipe(res)
  } 
});app.get('/media/SecondScene.mp4', function(req, res) {

  const stat = fs.statSync('./media/SecondScene.mp4')
  const fileSize = stat.size
  const range = req.headers.range
  if (range) {
    const parts = range.replace(/bytes=/, "").split("-")
    const start = parseInt(parts[0], 10)
    const end = parts[1] 
      ? parseInt(parts[1], 10)
      : fileSize-1
    const chunksize = (end-start)+1
    const file = fs.createReadStream('./media/SecondScene.mp4', {start, end})
    const head = {
       
      'Content-Range': `bytes ${start}-${end}/${fileSize}`,
      'Accept-Ranges': 'bytes',
      'Content-Length': chunksize,
      'Content-Type': 'video/mp4',
      'Access-Control-Allow-Origin': '*',
    }
    res.writeHead(206, head);
    file.pipe(res);
  } 
  else {
    const head = {      
        'Access-Control-Allow-Origin': '*',

      'Content-Length': fileSize,
      'Content-Type': 'video/mp4',

    }
    //res.writeHead(200, head)
    fs.createReadStream('./media/SecondScene.mp4').pipe(res)
  } 
});
app.listen(port, () => {
    console.log(`Example app listening at ${hostname}:${port}`);
})