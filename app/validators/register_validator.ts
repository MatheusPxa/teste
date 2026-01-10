import vine from '@vinejs/vine'

export const registerValidator = vine.compile(
  vine.object({
    nome: vine.string().minLength(3),
    email: vine.string().email(),
    password: vine.string().minLength(6),
    tipo: vine.enum(['paciente', 'profissional']),
  })
)
