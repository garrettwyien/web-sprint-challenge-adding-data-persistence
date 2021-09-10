const db = require('../../data/dbConfig');

async function get()  {
    const projects = await db('projects');
    const result = [];
    projects.map(obj=>{
        const item = {
            project_id: obj.project_id,
            project_name: obj.project_name,
            project_description: obj.project_description,
            project_completed: obj.project_completed === 0 ? false : true
        }
    result.push(item);
    })
        
    return result
}

async function add(newProject) {
    const [project_id] = await db('projects').insert(newProject)
    const item = await db('projects').where('project_id', project_id).first()
    const result = {
        project_id: item.project_id,
        project_name: item.project_name,
        project_description: item.project_description,
        project_completed: item.project_completed === 0 ? false : true
    }
    return result
}

module.exports = {
    get,
    add
};