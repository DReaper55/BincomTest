
const db = require('../../domain/repositories/mysql_repo');

class AnnStateResultRepository {
    // Create a new AnnStateResult
    createAnnStateResult(annStateResult, callback) {
      const query = 'INSERT INTO announced_state_results SET ?';
      db.query(query, annStateResult, (err, results) => {
        if (err) {
          console.error('Error creating AnnStateResult:', err);
          return callback(err, null);
        }
        callback(null, results.insertId);
      });
    }
  
    // Get all AnnStateResults
    getAllAnnStateResults(callback) {
      const query = 'SELECT * FROM announced_state_results';
      db.query(query, (err, results) => {
        if (err) {
          console.error('Error getting AnnStateResults:', err);
          return callback(err, null);
        }
        callback(null, results);
      });
    }
  
    // Get a AnnStateResult by uniqueId
    getAnnStateResultById(uniqueId, callback) {
      const query = 'SELECT * FROM announced_state_results WHERE uniqueid = ?';
      db.query(query, [uniqueId], (err, results) => {
        if (err) {
          console.error('Error getting AnnStateResult by ID:', err);
          return callback(err, null);
        }
        callback(null, results[0]);
      });
    }
  
    // Update a AnnStateResult by uniqueId
    updateAnnStateResultById(uniqueId, updates, callback) {
      const query = 'UPDATE announced_state_results SET ? WHERE uniqueid = ?';
      db.query(query, [updates, uniqueId], (err, results) => {
        if (err) {
          console.error('Error updating AnnStateResult:', err);
          return callback(err, false);
        }
        callback(null, results.affectedRows > 0);
      });
    }
  
    // Delete a AnnStateResult by uniqueId
    deleteAnnStateResultById(uniqueId, callback) {
      const query = 'DELETE FROM announced_state_results WHERE uniqueid = ?';
      db.query(query, [uniqueId], (err, results) => {
        if (err) {
          console.error('Error deleting AnnStateResult:', err);
          return callback(err, false);
        }
        callback(null, results.affectedRows > 0);
      });
    }
  }
  
  module.exports = AnnStateResultRepository;