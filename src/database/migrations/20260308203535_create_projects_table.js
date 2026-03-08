export async function up(knex) {
  await knex.schema.createTable("projects", (table) => {

    table.increments("id_project").primary();

    table.string("nombre", 255).notNullable();

    table.string("data", 255).notNullable();

    table.string("direction", 255).notNullable();

    table.string("details", 1000).notNullable();

    table.dateTime("created_at").notNullable().defaultTo(knex.fn.now());

    table.dateTime("modified_at").notNullable().defaultTo(knex.fn.now());
    
    table.dateTime("deleted_at").nullable();
    
    table.integer("id_user")
        .unsigned()
        .notNullable()
        .references("id_user")
        .inTable("users")
        .onDelete("CASCADE")
        .onUpdate("CASCADE");

  });
}

export async function down(knex) {
  await knex.schema.dropTableIfExists("projects");
}
