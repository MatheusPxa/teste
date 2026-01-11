import { BaseModel, column, belongsTo } from '@adonisjs/lucid/orm'
import User from './user'

export default class Paciente extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare userId: number

  @belongsTo(() => User)
  declare user: BelongsTo<typeof User>
}
