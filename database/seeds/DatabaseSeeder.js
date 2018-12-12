'use strict';

const UserSeeder = require('./UserSeeder')
const UserTypeSeeder = require('./UserTypeSeeder')

class DatabaseSeeder {
  async run() {
    // Put yours seeders in the desired order
    await UserTypeSeeder.run()
    await UserSeeder.run()
  }
}

module.exports = DatabaseSeeder
