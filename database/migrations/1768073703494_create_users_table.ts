import { BaseSchema } from '@adonisjs/lucid/schema'

export default class CreateConsultasTable extends BaseSchema {
  protected tableName = 'consultas'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')

      table
        .integer('paciente_id')
        .unsigned()
        .references('id')
        .inTable('users')
        .onDelete('CASCADE')

      table
        .integer('profissional_id')
        .unsigned()
        .references('id')
        .inTable('users')
        .onDelete('CASCADE')

      table.date('data').notNullable()
      table.time('hora').notNullable()

      table
        .enu('status', ['agendada', 'cancelada', 'concluida'])
        .defaultTo('agendada')

      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
