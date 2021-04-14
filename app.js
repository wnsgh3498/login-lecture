'use strict';
// 모듈
const express = require('express');
const app = express();
const PORT = 3005;

//라우팅
const home = require('./routes/home');

// 앱세팅
app.set('views', './views');
app.set('view engine', 'ejs');

app.use('/', home); // use -> 미들 웨어를 등록해주는 메서드

module.exports = app;

// const http = require('http');
// const app = http.createServer((req, res) => {
//   res.writeHead(200, { 'Content-type': 'text/html; charset=utf-8' });
//   if (req.url === '/') {
//     res.end('here is root page');
//   } else if (req.url === '/login') {
//     res.end('here is login page');
//   }
// });

// app.listen(3005, () => {
//   console.log('3005 port On');
// });
