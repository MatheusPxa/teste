import Consulta from '#models/consulta'
import { HttpContext } from '@adonisjs/core/http'

export default class ConsultasController {
  async store({ auth, request }: HttpContext) {
    const user = auth.user!

    const data = request.only(['profissional_id', 'data', 'hora'])

    const consulta = await Consulta.create({
      pacienteId: user.id,
      profissionalId: data.profissional_id,
      data: data.data,
      hora: data.hora,
      status: 'agendada',
    })

    return consulta
  }
}
