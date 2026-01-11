import Profissional from '#models/profissional'
import type { HttpContext } from '@adonisjs/core/http'

export default class ProfissionaisController {
  async index({ response }: HttpContext) {
    const profissionais = await Profissional.all()
    return response.ok(profissionais)
  }

  async store({ request, response }: HttpContext) {
    const data = request.only(['userId', 'especialidade'])
    const profissional = await Profissional.create(data)
    return response.created(profissional)
  }

  async show({ params, response }: HttpContext) {
    const profissional = await Profissional.findOrFail(params.id)
    return response.ok(profissional)
  }

  async update({ params, request, response }: HttpContext) {
    const profissional = await Profissional.findOrFail(params.id)
    profissional.merge(request.only(['especialidade']))
    await profissional.save()
    return response.ok(profissional)
  }

  async destroy({ params, response }: HttpContext) {
    const profissional = await Profissional.findOrFail(params.id)
    await profissional.delete()
    return response.noContent()
  }
}
