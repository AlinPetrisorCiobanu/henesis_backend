export async function up(knex) {
  await knex.schema.createTable("images", (table) => {

    table.increments("id_image").primary();

    table.string("nombre", 255).notNullable();

    table.string("alt_img", 255).notNullable();

    table.string("url_img", 255).notNullable();

    table.integer("id_project")
        .unsigned()
        .notNullable()
        .references("id_project")
        .inTable("projects")
        .onDelete("CASCADE")
        .onUpdate("CASCADE");

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
  await knex.schema.dropTableIfExists("images");
}
