let http = require("http");
let path = require('path');
let fs = require('fs'); // Corrected: Use 'fs' instead of fs

let server = http.createServer((req, res) => {
    let filePath = path.join(__dirname, 'projectFiles', req.url === '/' ? "index.html" : req.url);

    fs.readFile(filePath, (err, content) => {
        if (err) {
            if (err.code === "ENOENT") {

                fs.readFile(path.join(__dirname, 'projectFiles', 'Error.html'), (err, content) => {
                    if (err) {
                        res.writeHead(500);
                        res.end(`server Error: ${err.code}`);
                    } else {
                        console.log("about page");
                        res.writeHead(200, { 'content-type': 'text/html' });
                        res.end(content, 'utf8');
                    }
                });
            }
            else {
                res.writeHead(500);
                res.end(`server Error: ${err.code}`);
            }
        }
        else {

            res.writeHead(200, { 'content-type': 'text/html' });
            res.end(content, 'utf8');
        }
    });
});

server.listen(8000, () => {
    console.log(`Server running on PORT 4000`);
});
