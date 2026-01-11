import { BaseSchema } from '@ioc:Adonis/Lucid/Schema'

export default class Pacientes extends BaseSchema {
  protected tableName = 'pacientes'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table
        .integer('user_id')
        .unsigned()
        .references('id')
        .inTable('users')
        .onDelete('CASCADE')

      table.string('nome').notNullable()
      table.string('email').unique().notNullable()
      table.string('telefone').nullable()
      table.timestamps(true)
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
