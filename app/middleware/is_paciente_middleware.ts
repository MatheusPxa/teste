import type { HttpContext } from '@adonisjs/core/http'
import type { NextFn } from '@adonisjs/core/types/http'

export default class IsPaciente {
  async handle({ auth, response }: HttpContext, next: NextFn) {

    await auth.authenticate()

    if (auth.user?.tipo !== 'paciente') {
      return response.unauthorized({
        message: 'Acesso permitido apenas para pacientes',
      })
    }

    await next()
  }
}
