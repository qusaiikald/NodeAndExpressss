// // const Persons = require('./person');
// // // import Person from './person';
// // const person1 = new Persons("qusai", "19");
// // // console.log(person1);

// // person1.greeting();

// // const Logger = require("./loger");

// // const loggerObj = new Logger();

// // loggerObj.on("message", (data) => console.log(`Called listner: `, data));

// // loggerObj.log("hello world");

// const http = require('http');
// const path = require('path');
// const fs = require('fs');

// const server = http.createServer((req, res) => {
//     // if (req.url === '/') {
//     //     fs.readFile(path.join(__dirname, 'public', 'index.html'), (err, content) => {
//     //         if (err) {
//     //             res.writeHead(500, { 'content-type': 'text/html' });
//     //             res.end('<h1>Internal Server Error</h1>');
//     //         } else {
//     //             res.writeHead(200, { 'content-type': 'text/html' });
//     //             res.end(content);
//     //         }
//     //     });
//     // }
//     // if (req.url === '/api/users') {
//     //     const users = [{ name: 'qusai', age: '14' }, { name: 'hassan', age: '20' }];
//     //     res.writeHead(200, { 'content-type': 'application/json' });
//     //     res.end(JSON.stringify(users));
//     // }

//     // build the file path
//     let filePath = path.join(__dirname, 'public', req.url === '/' ? "index.html" : req.url);

//     // get the Extension of hte file
//     let extname = path.extname(filePath);

//     // set hte content type
//     let contentType = 'text/html';

//     switch (extname) {
//         case '.js':
//             contentType = 'text/javascript'; break;
//         case '.css':
//             contentType = 'text/css'; break;
//         case '.json':
//             contentType = 'application/json'; break;
//         case '.png':
//             contentType = 'image/png'; break;
//         case '.jpg':
//             contentType = 'image/jpg'; break;

//     }

//     // Read the file
//     fs.readFile(filePath, (err, content) => {

//         if (err) {
//             if (err.code == 'ENOENT') {
//                 // page not found
//                 fs.readFile(path.join(__dirname, 'public', 'about.html'), (err, content) => {

//                     // this equal to
//                     // res.statusCode = 200;
//                     // res.setHeader('Content-Type', 'text/html');

//                     res.writeHead(200, { 'content-type': 'text/html' });
//                     res.end(content, "utf8");

//                 });
//             }

//             else {
//                 // some server Error
//                 res.writeHead(500);
//                 res.end(`server Error: ${err.code}`);
//             }
//         }
//         else {
//             // secces
//             res.writeHead(200, { 'content-type': contentType });
//             res.end(content, "utf8");
//         }


//     });

// });


// const PORT = process.env.PORT || 5000;
// server.listen(PORT, () => {
//     console.log(`Server running on PORT ${PORT}`);
// });
