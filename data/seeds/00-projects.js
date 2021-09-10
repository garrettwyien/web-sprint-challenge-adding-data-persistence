const projects = [
  {project_name: 'Sprint challenge', project_description: 'an assessment of what you learned this week!'},
  {project_name: 'Module project', project_description: 'an assessment of what you learned today!'},
]
exports.projects=projects


exports.seed = function(knex) {
  return knex('projects').del()
    .then(function () {
      return knex('projects').insert(projects);
    });
};
