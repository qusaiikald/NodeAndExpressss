// URL platform
const url = require("url");

const myUrl = new URL('http://mywebsite.com/hello.html?id=100&status=active');

// Serialized URL
console.log(myUrl.href);
console.log(myUrl.toString());

// the root domine 
console.log(myUrl.host);

// u could take the host name the path etc...

// Serialized query the praniters
console.log(myUrl.search);

// params Object
console.log(myUrl.searchParams);

// add params
myUrl.searchParams.append("q", 100);
console.log(myUrl.searchParams);
