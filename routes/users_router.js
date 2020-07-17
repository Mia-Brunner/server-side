const express = require('express');
const router = express.Router();

const {
    userAuthenticated
} = require('../utils/common_utilities');

router.use(userAuthenticated);


module.exports = router;