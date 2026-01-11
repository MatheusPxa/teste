import { DateTime } from 'luxon'
import { BaseModel, column } from '@adonisjs/lucid/orm'

export default class Consulta extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare pacienteId: number

  @column()
  declare profissionalId: number

  @column()
  declare data: string

  @column()
  declare hora: string

  @column()
  declare status: 'agendada' | 'cancelada' | 'concluida'

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}
