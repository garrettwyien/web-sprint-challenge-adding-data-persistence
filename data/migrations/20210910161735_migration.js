
exports.up = function(knex) {
  return knex.schema
    .createTable('projects', tbl=>{
        tbl.increments('project_id');
        tbl.text(`project_name`, 128)
            .notNullable();
        tbl.text(`project_description`);
        tbl.boolean(`project_completed`)
            .defaultTo(0);
    })
    .createTable('resources', tbl=>{
        tbl.increments('resource_id');
        tbl.text('resource_name', 128)
            .notNullable()
            .unique();
        tbl.text('resource_description');
    })
    .createTable('tasks', tbl=>{
        tbl.increments('task_id');
        tbl.text('task_description')
            .notNullable();
        tbl.text('task_notes');
        tbl.boolean('task_completed')
            .defaultTo(0);
        tbl.integer('project_id')
            .unsigned()
            .notNullable()
            .references('project_id')
            .inTable('projects')
            .onUpdate('CASCADE')
            .onDelete('CASCADE');
    })
    .createTable('resource_assignment', tbl=>{
        tbl.integer('project_id')
            .unsigned()
            .notNullable()
            .references('project_id')
            .inTable('projects')
            .onUpdate('CASCADE')
            .onDelete('CASCADE');
        tbl.integer('resource_id')
            .unsigned()
            .notNullable()
            .references('resource_id')
            .inTable('resources')
            .onUpdate('CASCADE')
            .onDelete('CASCADE');
    })
};

exports.down = function(knex) {
    return knex.schema
      .dropTableIfExists('projects')
      .dropTableIfExists('tasks')
      .dropTableIfExists('resource_assignment')
      .dropTableIfExists('resources')
  };
