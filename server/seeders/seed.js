const db = require('../config/connection');
const { User } = require('../models');
const userseed = require('./user.json');
const clean = require('./clean');

db.once('open', async () => {
  await clean('User', 'user');

  await User.create(userseed);

  console.log('all done!');
  process.exit(0);
});
