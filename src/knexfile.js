// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
    connection: {
      host:'localhost',
      user:'postgres',
      password:process.env.DB_PASSWORD,
      database:'crudjson'
    }
  },
  test: {
    client: 'pg',
    connection: {
      host:'localhost',
      user:'postgres',
      password:process.env.DB_PASSWORD,
      database:'testcrudjson'

    }
  }

};
