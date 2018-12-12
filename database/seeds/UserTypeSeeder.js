'use strict'

/*
|--------------------------------------------------------------------------
| UserTypeSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Database')} */
const Database = use('Database')

class UserTypeSeeder {
  /*
  |  You need to add the "static" modifier
  |  so you don't need to instantiate the class
  |  inside the "DatabaseSeeder", making the code
  |  easier to read and write.
  */
  static async run () {
    await Database.table('user_types').insert([
      { id: 1, name: 'System Manager' },
      { id: 2, name: 'Simple user' },
      { id: 3, name: 'Advanced user' }
    ])
  }
}

module.exports = UserTypeSeeder
