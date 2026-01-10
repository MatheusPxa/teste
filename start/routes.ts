/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'
import middleware from '@adonisjs/core/services/middleware'


router.get('/', async () => {
  return { hello: 'world' }
})

router.post('/auth/register', '#controllers/auth_controller.register')
router.post('/auth/login', '#controllers/auth_controller.login')

router.get('/perfil', async ({ auth }) => {
  await auth.authenticate()
  return auth.user
})

router
  .group(() => {
    router.post('/consultas', '#controllers/consultas_controller.store')
  })
  .use([middleware.auth(), middleware.isPaciente()])
