const express = require('express');
const router = express.Router();
const db = require("../db/queries/userQueries")
const passport = require("../auth/local")
const { loginRequire } = require('../auth/helpers')
const {getAllUsers, getSingleUser, updateUser, createUser, deleteUser, isLoggedIn, loginUser, logoutUser} = require('../db/queries/usersqueries.js');


router.get('/', getAllUsers);
router.get('/getUser/:id', getSingleUser);
router.post('/login', passport.authenticate("local", {}), db.loginUser);
router.get('/isLoggedIn', db.isLoggedIn);
router.get('/logout', loginRequire, db.logoutUser);
router.patch('/:id', updateUser);
router.post('/register', createUser);
router.delete('/:id', deleteUser);


module.exports = router;