
const fs = require('fs');
const path = require('path');

// Creat a folder
// fs.mkdir(path.join(__dirname, '/test'), {}, err => {
//     if (err) throw err;
//     console.log("folder created...");
// });

// creat file
// fs.writeFile(path.join(__dirname, '/test', "testFile.txt"), "Hello from the Test file", err => {
//     if (err) throw err;
//     console.log("file created...");

//     // here how to append into the file without override it u could use it inside the fun becous it is an asyn
//     fs.appendFile(path.join(__dirname, '/test', "testFile.txt"), "I love node.js", err => {
//         if (err) throw err;
//         console.log("file created...");
//     });
// });

// this gonna override the above file
// fs.writeFile(path.join(__dirname, '/test', "testFile.txt"), "I love node.js", err => {
//     if (err) throw err;
//     console.log("file created...");

// });

// Read file
fs.readFile(path.join(__dirname, '/test', "testFile.txt"), 'utf8', (err, data) => {
    if (err) throw err;
    console.log(data);
});

// u could rename the file in the same way but in hte second pramoter u shpuld put the file path

