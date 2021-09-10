// build your `Task` model here
const db = require('../../data/dbConfig');

async function get()  {
    const tasks = await db('tasks');
    const result = [];
    tasks.map(obj=>{
        const item = {
            task_id: obj.task_id,
            task_description: obj.task_description,
            task_notes: obj.task_notes,
            task_completed: obj.task_completed === 0 ? false : true,
            project_id: obj.project_id
        }
    result.push(item);
    })
        
    return result
}

async function add(newTask) {
//SQL QUERY:
    //   SELECT
    //       t.task_id,
    //       t.task_description,
    //       t.task_notes,
    //       t.task_completed,
    //       p.project_name,
    //       p.project_description
    //   FROM tasks as t
    //   JOIN projects as p
    //       ON t.project_id = p.project_id
    const [task_id] = await db('tasks').insert(newTask)
    const item = await db('tasks as t')
        .join('projects as p', 't.project_id', 'p.project_id')
        .select('t.task_id', 't.task_description', 't.task_notes', 't.task_completed', 'p.project_name', 'p.project_description')
        .where('task_id', task_id)
        .first()
    const result = {
        task_id: item.task_id,
        task_description: item.task_description,
        task_notes: item.task_notes,
        task_completed: item.task_completed === 0 ? false : true,
        project_name: item.project_name,
        project_description: item.project_description
    }
    return result
}

module.exports = {
    get,
    add
};