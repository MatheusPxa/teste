import Disponibilidade from '#models/disponibilidade'
import type { HttpContext } from '@adonisjs/core/http'

export default class DisponibilidadesController {
  async index({ response }: HttpContext) {
    const disponibilidades = await Disponibilidade.all()
    return response.ok(disponibilidades)
  }

  async store({ request, response }: HttpContext) {
    const data = request.only([
      'profissionalId',
      'data',
      'horaInicio',
      'horaFim',
    ])

    const disponibilidade = await Disponibilidade.create(data)
    return response.created(disponibilidade)
  }

  async destroy({ params, response }: HttpContext) {
    const disponibilidade = await Disponibilidade.findOrFail(params.id)
    await disponibilidade.delete()
    return response.noContent()
  }
}
