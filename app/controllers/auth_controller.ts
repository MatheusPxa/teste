import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import User from 'App/models/User'
import Hash from '@ioc:Adonis/Core/Hash'

export default class AuthController {

  public async register({ request }: HttpContextContract) {
    const { nome, email, password, tipo } = request.only([
      'nome',
      'email',
      'password',
      'tipo',
    ])

    const user = await User.create({
      nome,
      email,
      password,
      tipo,
    })

    return user
  }

  public async login({ auth, request }: HttpContextContract) {
    const { email, password } = request.only(['email', 'password'])

    const user = await User.findBy('email', email)
    if (!user) {
      return { error: 'Email não encontrado' }
    }

    const passwordValid = await Hash.verify(user.password, password)
    if (!passwordValid) {
      return { error: 'Senha incorreta' }
    }

    const token = await auth.use('api').login(user)

    return { token }
  }

  public async logout({ auth }: HttpContextContract) {
    await auth.use('api').logout()
    return { message: 'Logout realizado com sucesso' }
  }
}
