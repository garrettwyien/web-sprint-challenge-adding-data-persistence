const resourceAssignments = [
  {project_id: 1, resource_id: 2},
  {project_id: 1, resource_id: 4},
  {project_id: 1, resource_id: 5},
  {project_id: 2, resource_id: 1},
  {project_id: 2, resource_id: 2},
  {project_id: 2, resource_id: 3},
  {project_id: 2, resource_id: 4},
  {project_id: 2, resource_id: 5},
];

exports.resourceAssignments=resourceAssignments


exports.seed = function(knex) {
  return knex('resource_assignment').del()
    .then(function () {
      return knex('resource_assignment').insert(resourceAssignments);
    });
};