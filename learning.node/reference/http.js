const http = require("http");

// Creat server obj
http.createServer((req, res) => {

    // Write the respo
    res.write("Hello world");
    res.end();
}).listen(5000, () => console.log('Server running ...'));