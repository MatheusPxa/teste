import { BaseModel, column, hasOne } from '@adonisjs/lucid/orm'
import Paciente from './paciente'
import Profissional from './profissional'

export default class User extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare email: string

  @column({ serializeAs: null })
  declare password: string

  @hasOne(() => Paciente)
  declare paciente: HasOne<typeof Paciente>

  @hasOne(() => Profissional)
  declare profissional: HasOne<typeof Profissional>
}
