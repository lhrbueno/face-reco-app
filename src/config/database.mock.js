const databaseMock = {
  users: [
    {
      id: 1,
      name: 'John Doe',
      email: 'john@email.com',
      password: 'cookies',
      entries: 0,
      joined: new Date()
    },
    {
      id: 2,
      name: 'Sally Mustang',
      email: 'sally@email.com',
      password: 'cake',
      entries: 0,
      joined: new Date()
    }
  ]
}

module.exports = databaseMock;