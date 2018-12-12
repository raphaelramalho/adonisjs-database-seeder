'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class UserTypesSchema extends Schema {
  up () {
    this.create('user_types', table => {
      table.increments()
      table.string('name', 20).notNullable()
    });
  }

  down () {
    this.drop('user_types')
  }
}

module.exports = UserTypesSchema
