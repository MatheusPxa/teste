import { HttpContext } from '@adonisjs/core/http'

export default class IsPaciente {
  async handle({ auth, response }: HttpContext, next: () => Promise<void>) {
    await auth.authenticate()

    if (auth.user?.tipo !== 'paciente') {
      return response.forbidden({
        message: 'Acesso permitido apenas para pacientes',
      })
    }

    await next()
  }
}
