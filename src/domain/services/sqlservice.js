
const fs = require('fs');
const db = require('../../domain/repositories/mysql_repo');

function executeSqlFile(filePath, callback) {
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      return callback(err);
    }

    const queries = data.split(';').filter((query) => query.trim() !== '');

    queries.forEach((query) => {
      db.query(query, (err, results) => {
        if (err) {
          console.error('Error executing query:', err);
        } else {
          console.log('Query executed successfully');
        }
      });
    });

    callback(null);
  });
}

module.exports = {
  executeSqlFile,
};
