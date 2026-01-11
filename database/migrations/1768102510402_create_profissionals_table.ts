import { BaseSchema } from '@ioc:Adonis/Lucid/Schema'

export default class Profissionals extends BaseSchema {
  protected tableName = 'profissionals'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table
        .integer('user_id')
        .unsigned()
        .references('id')
        .inTable('users')
        .onDelete('CASCADE')

      table.string('especialidade').notNullable()
      table.timestamps(true) 
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
