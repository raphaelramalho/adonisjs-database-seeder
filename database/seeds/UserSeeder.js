'use strict'

/*
|--------------------------------------------------------------------------
| UserSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Database')} */
const Database = use('Database')
const Hash = use('Hash')

class UserSeeder {
  /*
  |  You need to add the "static" modifier
  |  so you don't need to instantiate the class
  |  inside the "DatabaseSeeder", making the code
  |  easier to read and write.
  */
  static async run () {
    const encryptedPassword = await Hash.make('123456')

    await Database.table('users').insert([
      {
        user_type_id: 1,
        email: 'manager@email.com',
        password: encryptedPassword
      },
      {
        user_type_id: 2,
        email: 'simple@email.com',
        password: encryptedPassword
      }
    ])
  }
}

module.exports = UserSeeder
