/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'

// Rota teste
router.get('/', async () => {
  return {
    hello: 'world',
  }
})

router.post('/auth/register', '#controllers/auth_controller.register')
router.post('/auth/login', '#controllers/auth_controller.login')

router.resource('profissionais', '#controllers/profissionais_controller')
router.resource('pacientes', '#controllers/pacientes_controller')
router.resource('disponibilidades', '#controllers/disponibilidades_controller')
router.resource('consultas', '#controllers/consultas_controller')
