
const db = require('../../domain/repositories/mysql_repo');

class PartyRepository {
    // Create a new Party
    createParty(party, callback) {
      const query = 'INSERT INTO party SET ?';
      db.query(query, party, (err, results) => {
        if (err) {
          console.error('Error creating Party:', err);
          return callback(err, null);
        }
        callback(null, results.insertId);
      });
    }
  
    // Get all Partys
    getAllPartys(callback) {
      const query = 'SELECT * FROM party';
      db.query(query, (err, results) => {
        if (err) {
          console.error('Error getting Partys:', err);
          return callback(err, null);
        }
        callback(null, results);
      });
    }
  
    // Get a Party by uniqueId
    getPartyById(uniqueId, callback) {
      const query = 'SELECT * FROM party WHERE uniqueid = ?';
      db.query(query, [uniqueId], (err, results) => {
        if (err) {
          console.error('Error getting Party by ID:', err);
          return callback(err, null);
        }
        callback(null, results[0]);
      });
    }
  
    // Update a Party by uniqueId
    updatePartyById(uniqueId, updates, callback) {
      const query = 'UPDATE party SET ? WHERE uniqueid = ?';
      db.query(query, [updates, uniqueId], (err, results) => {
        if (err) {
          console.error('Error updating Party:', err);
          return callback(err, false);
        }
        callback(null, results.affectedRows > 0);
      });
    }
  
    // Delete a Party by uniqueId
    deletePartyById(uniqueId, callback) {
      const query = 'DELETE FROM party WHERE uniqueid = ?';
      db.query(query, [uniqueId], (err, results) => {
        if (err) {
          console.error('Error deleting Party:', err);
          return callback(err, false);
        }
        callback(null, results.affectedRows > 0);
      });
    }
  }
  
  module.exports = PartyRepository;