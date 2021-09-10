// build your `/api/projects` router here
const express = require('express');
const Project = require('./model');
const router = express.Router();

router.get('/', (req, res, next) => {
    Project.get()
    .then(projects=>{
        res.json(projects)
    })
    .catch(next)
})

router.post('/', (req,res,next) => {
    const newProject = req.body
    Project.add(newProject)
    .then(project=>{
        res.status(201).json(project)
    })
    .catch(next)
})
module.exports = router