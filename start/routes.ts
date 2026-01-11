/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
| The routes file is used for defining the HTTP routes.
|--------------------------------------------------------------------------
*/

import router from '@adonisjs/core/services/router'

router.get('/', async () => {
  return { hello: 'world' }
})


router.post('/auth/register', '#controllers/auth_controller.register')
router.post('/auth/login', '#controllers/auth_controller.login')
router.post('/auth/logout', '#controllers/auth_controller.logout').use('auth')


router.get('/perfil', async ({ auth }) => {
  await auth.authenticate()
  return auth.user
}).use('auth')


router
  .group(() => {
    router.post('/consultas', '#controllers/consultas_controller.store')
  })
  .use(['auth', 'isPaciente'])


router
  .get('/paciente/perfil', async ({ auth }) => {
    return auth.user
  })
  .use(['auth', 'isPaciente'])
