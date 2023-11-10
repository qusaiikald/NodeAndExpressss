// gives u information about ur operating system
const os = require('os');

console.log(os.platform());

// cpu arch
console.log(os.arch());

// cpu core Info
console.log(os.cpus());

// free memomry
console.log(os.freemem());

// total memomry
console.log(os.totalmem());

// home dir
console.log(os.homedir());
