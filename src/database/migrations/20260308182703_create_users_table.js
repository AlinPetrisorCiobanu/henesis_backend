export async function up(knex) {
  await knex.schema.createTable("users", (table) => {

    table.increments("id_user").primary();

    table.string("nombre", 150).notNullable();

    table.string("apellidos", 255).notNullable();

    table.string("telefono", 20);

    table.string("email", 255).notNullable().unique();

    table.string("user", 255).notNullable().unique();

    table.string("password", 255).notNullable();

    // últimas 3 columnas actualizadas correctamente
    table.dateTime("created_at").notNullable().defaultTo(knex.fn.now());

    table.dateTime("modified_at").notNullable().defaultTo(knex.fn.now());
    
    table.dateTime("deleted_at").nullable();

  });
}

export async function down(knex) {
  await knex.schema.dropTableIfExists("users");
}
