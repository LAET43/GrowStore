const { connect, connection } = require('mongoose');

module.exports = class Database {
  connectToMongo("رابط المونجو تاعك") {
    connect(mongoURI, {
      keepAlive: true,
    }).then(() => {
      console.log(`Connected to ${connection.name} database!`);
    });
  }
};
