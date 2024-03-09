
const db = require('../../domain/repositories/mysql_repo');

class AnnLgaResultRepository {
    // Create a new AnnLgaResult
    createAnnLgaResult(annLgaResult, callback) {
      const query = 'INSERT INTO announced_lga_results SET ?';
      db.query(query, annLgaResult, (err, results) => {
        if (err) {
          console.error('Error creating annLgaResult:', err);
          return callback(err, null);
        }
        callback(null, results.insertId);
      });
    }
  
    // Get all AnnLgaResults
    getAllAnnLgaResults(callback) {
      const query = 'SELECT * FROM announced_lga_results';
      db.query(query, (err, results) => {
        if (err) {
          console.error('Error getting AnnLgaResults:', err);
          return callback(err, null);
        }
        callback(null, results);
      });
    }
  
    // Get a annLgaResult by uniqueId
    getAnnLgaResultById(uniqueId, callback) {
      const query = 'SELECT * FROM announced_lga_results WHERE uniqueid = ?';
      db.query(query, [uniqueId], (err, results) => {
        if (err) {
          console.error('Error getting annLgaResult by ID:', err);
          return callback(err, null);
        }
        callback(null, results[0]);
      });
    }
  
    // Update a annLgaResult by uniqueId
    updateAnnLgaResultById(uniqueId, updates, callback) {
      const query = 'UPDATE announced_lga_results SET ? WHERE uniqueid = ?';
      db.query(query, [updates, uniqueId], (err, results) => {
        if (err) {
          console.error('Error updating annLgaResult:', err);
          return callback(err, false);
        }
        callback(null, results.affectedRows > 0);
      });
    }
  
    // Delete a annLgaResult by uniqueId
    deleteAnnLgaResultById(uniqueId, callback) {
      const query = 'DELETE FROM announced_lga_results WHERE uniqueid = ?';
      db.query(query, [uniqueId], (err, results) => {
        if (err) {
          console.error('Error deleting annLgaResult:', err);
          return callback(err, false);
        }
        callback(null, results.affectedRows > 0);
      });
    }
  }
  
  module.exports = AnnLgaResultRepository;