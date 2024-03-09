
const db = require('../../domain/repositories/mysql_repo');

class LgaRepository {
    // Create a new Lga
    createLga(lga, callback) {
      const query = 'INSERT INTO lga SET ?';
      db.query(query, lga, (err, results) => {
        if (err) {
          console.error('Error creating Lga:', err);
          return callback(err, null);
        }
        callback(null, results.insertId);
      });
    }
  
    // Get all Lgas
    getAllLgas(callback) {
      const query = 'SELECT * FROM lga';
      db.query(query, (err, results) => {
        if (err) {
          console.error('Error getting Lgas:', err);
          return callback(err, null);
        }
        callback(null, results);
      });
    }
  
    // Get a Lga by uniqueId
    getLgaById(uniqueId, callback) {
      const query = 'SELECT * FROM lga WHERE uniqueid = ?';
      db.query(query, [uniqueId], (err, results) => {
        if (err) {
          console.error('Error getting Lga by ID:', err);
          return callback(err, null);
        }
        callback(null, results[0]);
      });
    }
  
    // Update a Lga by uniqueId
    updateLgaById(uniqueId, updates, callback) {
      const query = 'UPDATE lga SET ? WHERE uniqueid = ?';
      db.query(query, [updates, uniqueId], (err, results) => {
        if (err) {
          console.error('Error updating Lga:', err);
          return callback(err, false);
        }
        callback(null, results.affectedRows > 0);
      });
    }
  
    // Delete a Lga by uniqueId
    deleteLgaById(uniqueId, callback) {
      const query = 'DELETE FROM lga WHERE uniqueid = ?';
      db.query(query, [uniqueId], (err, results) => {
        if (err) {
          console.error('Error deleting Lga:', err);
          return callback(err, false);
        }
        callback(null, results.affectedRows > 0);
      });
    }
  }
  
  module.exports = LgaRepository;