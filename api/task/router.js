// build your `/api/tasks` router here
const express = require('express');
const Task = require('./model');
const router = express.Router();

router.get('/', (req, res, next) => {
    console.log('getting')
})

router.post('/', (req,res,next) => {
    console.log('posting')
})

module.exports = router