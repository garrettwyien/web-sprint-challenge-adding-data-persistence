const resources = [
  {resource_name: 'instructors', resource_description: 'a faculty member who can help answer your questions'},
  {resource_name: 'guided projects', resource_description: 'follow-along projects that can help you learn the material'},
  {resource_name: 'peers', resource_description: 'classmates who you can collaborate with'},
  {resource_name: 'stackoverflow', resource_description: 'a website where you can ask people to inspect your code'},
  {resource_name: 'canvas', resource_description: 'a website that contains all of the lecture materials'},
];

exports.resources=resources


exports.seed = function(knex) {
  return knex('resources').del()
    .then(function () {
      return knex('resources').insert(resources);
    });
};