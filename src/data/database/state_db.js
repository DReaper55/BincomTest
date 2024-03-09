
const db = require('../../domain/repositories/mysql_repo');

class StateRepository {
    // Create a new State
    createState(state, callback) {
      const query = 'INSERT INTO state SET ?';
      db.query(query, state, (err, results) => {
        if (err) {
          console.error('Error creating State:', err);
          return callback(err, null);
        }
        callback(null, results.insertId);
      });
    }
  
    // Get all States
    getAllStates(callback) {
      const query = 'SELECT * FROM state';
      db.query(query, (err, results) => {
        if (err) {
          console.error('Error getting States:', err);
          return callback(err, null);
        }
        callback(null, results);
      });
    }
  
    // Get a State by uniqueId
    getStateById(uniqueId, callback) {
      const query = 'SELECT * FROM state WHERE uniqueid = ?';
      db.query(query, [uniqueId], (err, results) => {
        if (err) {
          console.error('Error getting State by ID:', err);
          return callback(err, null);
        }
        callback(null, results[0]);
      });
    }
  
    // Update a State by uniqueId
    updateStateById(uniqueId, updates, callback) {
      const query = 'UPDATE state SET ? WHERE uniqueid = ?';
      db.query(query, [updates, uniqueId], (err, results) => {
        if (err) {
          console.error('Error updating State:', err);
          return callback(err, false);
        }
        callback(null, results.affectedRows > 0);
      });
    }
  
    // Delete a State by uniqueId
    deleteStateById(uniqueId, callback) {
      const query = 'DELETE FROM state WHERE uniqueid = ?';
      db.query(query, [uniqueId], (err, results) => {
        if (err) {
          console.error('Error deleting State:', err);
          return callback(err, false);
        }
        callback(null, results.affectedRows > 0);
      });
    }
  }
  
  module.exports = StateRepository;