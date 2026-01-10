import { registerValidator } from '#validators/register_validator'
import User from '#models/user'
import hash from '@adonisjs/core/services/hash'
import { HttpContext } from '@adonisjs/core/http'

export default class AuthController {
  async register({ request }: HttpContext) {
    const data = await request.validateUsing(registerValidator)

    const user = await User.create({
      ...data,
      password: await hash.make(data.password),
    })

    return user
  }

  async login({ auth, request }: HttpContext) {
    const { email, password } = request.only(['email', 'password'])

    const token = await auth.use('api').attempt(email, password)

    return token
  }
}
