const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {

    res.send('you are in the test router');
    next();
});
module.exports = router;