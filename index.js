require('babel-register')({
    presets: [ 'es2015' ]
 });
var counter= require('./counter');

var data="Node.js is an open source cross-platform runtime environment for developing server-side and networking applications Node.js applications are written in JavaScript and can be run within the Node.js runtime on OS X Microsoft Windows and Linux Node.js also provides a rich library of various JavaScript modules which simplifies the development of web applications using Node.js to a great extent"
console.log(counter(data));