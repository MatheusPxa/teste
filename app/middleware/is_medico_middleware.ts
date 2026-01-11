import type { HttpContext } from '@adonisjs/core/http'

export default class IsMedico {
  async handle({ auth, response }: HttpContext, next: () => Promise<void>) {
    await auth.authenticate()

    if (auth.user?.tipo !== 'medico') {
      return response.forbidden({ message: 'Acesso permitido apenas para médicos' })
    }

    await next()
  }
}
