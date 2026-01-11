import Paciente from '#models/paciente'
import type { HttpContext } from '@adonisjs/core/http'

export default class PacientesController {
  async index({ response }: HttpContext) {
    const pacientes = await Paciente.all()
    return response.ok(pacientes)
  }

  async store({ request, response }: HttpContext) {
    const data = request.only(['userId'])
    const paciente = await Paciente.create(data)
    return response.created(paciente)
  }

  async show({ params, response }: HttpContext) {
    const paciente = await Paciente.findOrFail(params.id)
    return response.ok(paciente)
  }

  async destroy({ params, response }: HttpContext) {
    const paciente = await Paciente.findOrFail(params.id)
    await paciente.delete()
    return response.noContent()
  }
}
