const db = require('../../data/dbConfig');

const validateTask = async (req,res,next) =>{
    try {
        if (!req.body.task_description ||
            typeof req.body.task_description !== 'string' ||
            req.body.task_description.length < 1) {
                next({ status: 400, message: "invalid task"})
            } else {
                next()
            }
    } catch (err) {
        next(err)
    }
}

const checkProjectId = async (req,res,next)=>{
    try {
        const possibleProject = await db('projects')
            .where('project_id', req.body.project_id)
            .first()
        if (!possibleProject) {
            next({status:404,message:`project with project_id ${req.body.project_id} not found`})
        } else {
            next()
        }
    } catch (err) {
        next(err)
    }
}

module.exports = {
    validateTask,
    checkProjectId
  }