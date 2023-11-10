const exp = require('constants');
const express = require('express');
// const exphbs = require('express-handlebars');
const path = require('path');
const logger = require('./middelware/logger');
const app = express();

// creat a middelware  فكرته كأنك بتوسي فنكشن منك


// init the middelware

// app.get('/', (req, res) => {
//     res.sendFile(path.join(__dirname, 'public', 'index.html'));
// });

// app.use(logger);

// HandleBars Middleware
// app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
// app.set('view engine', 'handlebars');

// Body parser middelware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// app.get('/', (req, res) => res.render("index"));

// set static folder
app.use(express.static(path.join(__dirname, 'public')));

// members api route
app.use('/api/members', require('./routes/API/members'));

// the router test for learning perpose
const myTestR = require('./routes/API/test');
app.use('/q', myTestR);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`server running on ${PORT}`);
});