# Adonis DatabaseSeeder Example

This is an example of how you can implement the seeders ordering logic similar to the way Laravel Framework does.

#### Compatibility

AdonisJS 4.1.0

## Setup

You need to add the "static" modifier in seeder's run methods so you don't need to instantiate the class inside the "DatabaseSeeder", making the code easier to read and write.

### Seeder file

```js
'use strict'

const Database = use('Database')

class UserTypeSeeder {
  static async run () {
    await Database.table('user_types').insert([
      { id: 1, name: 'System Manager' },
      { id: 2, name: 'Simple user' },
      { id: 3, name: 'Advanced user' }
    ])
  }
}

module.exports = UserTypeSeeder
```

### DatabaseSeeder

This file doesn't need a 'static' modifier

```js
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
```

## Seed

Run the following command to run yours seeders.

```js
adonis seed --files 'DatabaseSeeder.js'
```
