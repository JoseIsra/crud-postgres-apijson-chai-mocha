// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
    connection: {
      host:'localhost',
      user:'postgres',
      password:'progresa2021',
      database:'crudjson'

    }
  },
  test: {
    client: 'pg',
    connection: {
      host:'localhost',
      user:'postgres',
      password:'progresa2021',
      database:'testcrudjson'

    }
  },

};
