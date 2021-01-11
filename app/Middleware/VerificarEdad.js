'use strict'

const Response = require('@adonisjs/framework/src/Response')

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

class VerificarEdad {
  /**
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Function} next
   */
  async handle ({ request, response  }, next) {
    if(request.input('edad') < 0){
      return response.status(404).json({
        message: 'Ingrese una edad valida'
      })
    }
    // call next to advance the request
    await next()
  }
}

module.exports = VerificarEdad
