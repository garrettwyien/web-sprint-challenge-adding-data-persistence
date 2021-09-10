// build your `/api/tasks` router here
const express = require('express');
const Task = require('./model');
const router = express.Router();

router.get('/', (req, res, next) => {
    Task.get()
    .then(tasks=>{
        res.json(tasks)
    })
    .catch(next)
})

router.post('/', (req,res,next) => {
    const newTask = req.body
    Task.add(newTask)
    .then(task=>{
        res.status(201).json(task)
    })
    .catch(next)
})

module.exports = router