'use strict'

/*
|--------------------------------------------------------------------------
| PersonaSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')
const Database = use('Database')

class PersonaSeeder {
  async run () {
    await Factory.model('App/Models/Persona').create()
  }
}

module.exports = PersonaSeeder
