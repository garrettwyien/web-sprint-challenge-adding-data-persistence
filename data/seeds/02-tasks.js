const tasks = [
  {project_id: 1, task_description: 'construct a database with knex', task_notes: 'test your knowledge of knex'},
  {project_id: 1, task_description: 'build out a server that uses your database',  task_notes: 'take your time!'},
  {project_id: 2, task_description: 'build a model.js file'},
  {project_id: 2, task_description: 'build middleware functions', task_notes: 'create middleware functions that validates data payloads and check for db ids'},
]
exports.tasks=tasks


exports.seed = function(knex) {
  return knex('tasks').del()
    .then(function () {
      return knex('tasks').insert(tasks);
    });
};
