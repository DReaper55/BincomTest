
const db = require('../../domain/repositories/mysql_repo');

class AnnWardResultRepository {
    // Create a new AnnWardResult
    createAnnWardResult(annWardResult, callback) {
      const query = 'INSERT INTO announced_ward_results SET ?';
      db.query(query, annWardResult, (err, results) => {
        if (err) {
          console.error('Error creating AnnWardResult:', err);
          return callback(err, null);
        }
        callback(null, results.insertId);
      });
    }
  
    // Get all AnnWardResults
    getAllAnnWardResults(callback) {
      const query = 'SELECT * FROM announced_ward_results';
      db.query(query, (err, results) => {
        if (err) {
          console.error('Error getting AnnWardResults:', err);
          return callback(err, null);
        }
        callback(null, results);
      });
    }
  
    // Get a AnnWardResult by uniqueId
    getAnnWardResultById(uniqueId, callback) {
      const query = 'SELECT * FROM announced_ward_results WHERE uniqueid = ?';
      db.query(query, [uniqueId], (err, results) => {
        if (err) {
          console.error('Error getting AnnWardResult by ID:', err);
          return callback(err, null);
        }
        callback(null, results[0]);
      });
    }
  
    // Update a AnnWardResult by uniqueId
    updateAnnWardResultById(uniqueId, updates, callback) {
      const query = 'UPDATE announced_ward_results SET ? WHERE uniqueid = ?';
      db.query(query, [updates, uniqueId], (err, results) => {
        if (err) {
          console.error('Error updating AnnWardResult:', err);
          return callback(err, false);
        }
        callback(null, results.affectedRows > 0);
      });
    }
  
    // Delete a AnnWardResult by uniqueId
    deleteAnnWardResultById(uniqueId, callback) {
      const query = 'DELETE FROM announced_ward_results WHERE uniqueid = ?';
      db.query(query, [uniqueId], (err, results) => {
        if (err) {
          console.error('Error deleting AnnWardResult:', err);
          return callback(err, false);
        }
        callback(null, results.affectedRows > 0);
      });
    }
  }
  
  module.exports = AnnWardResultRepository;