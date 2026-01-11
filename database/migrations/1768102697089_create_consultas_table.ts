import { BaseSchema } from '@ioc:Adonis/Lucid/Schema'

export default class Consultas extends BaseSchema {
  protected tableName = 'consultas'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')

      table
        .integer('paciente_id')
        .unsigned()
        .references('id')
        .inTable('pacientes')
        .onDelete('CASCADE')

      table
        .integer('profissional_id')
        .unsigned()
        .references('id')
        .inTable('profissionals')
        .onDelete('CASCADE')

      table.date('data').notNullable()
      table.time('hora').notNullable()
      table.enum('status', ['agendada', 'cancelada', 'concluida']).notNullable()

      table.timestamps(true) 
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
