const express = require('express');
const router = express.Router();

// will need to remove register function as there is only one user that will eventually log in and out 
// for the purpose of the assignmnet i have left it in
const {
    register,
    login,
    logout,
    activeUserSession
} = require('../controllers/auth_controller');

router.post("/register", register)
router.post('/login', login);
router.get('/logout', logout);
router.get('/user', activeUserSession);


module.exports = router;