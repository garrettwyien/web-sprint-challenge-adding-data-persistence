// build your `/api/tasks` router here
const express = require('express');
const Task = require('./model');
const {
    validateTask,
    checkProjectId
  } = require('./middleware');
const router = express.Router();

router.get('/', (req, res, next) => {
    Task.get()
    .then(tasks=>{
        res.json(tasks)
    })
    .catch(next)
})

router.post('/', checkProjectId, validateTask, (req,res,next) => {
    const newTask = req.body
    Task.add(newTask)
    .then(task=>{
        res.status(201).json(task)
    })
    .catch(next)
})

module.exports = router