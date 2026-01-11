import { BaseSchema } from '@ioc:Adonis/Lucid/Schema'

export default class Disponibilidades extends BaseSchema {
  protected tableName = 'disponibilidades'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table
        .integer('profissional_id')
        .unsigned()
        .references('id')
        .inTable('profissionals')
        .onDelete('CASCADE')

      table.integer('dia_da_semana').notNullable() 
      table.time('hora_inicio').notNullable()
      table.time('hora_fim').notNullable()

      table.timestamps(true)
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
