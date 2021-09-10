// build your `/api/projects` router here
const express = require('express');
const Project = require('./model');
const router = express.Router();

router.get('/', (req, res, next) => {
    console.log('getting')
})

router.post('/', (req,res,next) => {
    console.log('posting')
})

module.exports = router