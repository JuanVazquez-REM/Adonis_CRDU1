'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.get('/', () => {
  return { mensaje: 'Hello world in JSON' }
})

Route.get('personas', 'PersonaController.mostrar')
Route.get('persona/:id', 'PersonaController.find_persona')
Route.post('persona', 'PersonaController.insertar').middleware(['verificaredad'])
Route.put('persona/:id', 'PersonaController.actualizar').middleware(['verificaredad'])
Route.delete('persona/:id', 'PersonaController.borrar')