import Consulta from '#models/consulta'
import Disponibilidade from '#models/disponibilidade'
import type { HttpContext } from '@adonisjs/core/http'

export default class ConsultasController {
  async index({ response }: HttpContext) {
    const consultas = await Consulta.all()
    return response.ok(consultas)
  }

  async store({ request, response }: HttpContext) {
    const data = request.only([
      'pacienteId',
      'profissionalId',
      'data',
      'hora',
    ])

    // Verifica se existe disponibilidade
    const disponibilidade = await Disponibilidade.query()
      .where('profissional_id', data.profissionalId)
      .where('data', data.data)
      .where('horaInicio', '<=', data.hora)
      .where('horaFim', '>=', data.hora)
      .first()

    if (!disponibilidade) {
      return response.badRequest({
        message: 'Profissional não disponível neste horário',
      })
    }

    // Verifica conflito
    const conflito = await Consulta.query()
      .where('profissional_id', data.profissionalId)
      .where('data', data.data)
      .where('hora', data.hora)
      .first()

    if (conflito) {
      return response.badRequest({
        message: 'Horário já agendado',
      })
    }

    const consulta = await Consulta.create(data)
    return response.created(consulta)
  }

  async destroy({ params, response }: HttpContext) {
    const consulta = await Consulta.findOrFail(params.id)
    await consulta.delete()
    return response.noContent()
  }
}
