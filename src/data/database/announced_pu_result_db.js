
const db = require('../../domain/repositories/mysql_repo');

class AnnPuResultRepository {
    // Create a new AnnPuResult
    createAnnPuResult(annPuResult, callback) {
      const query = 'INSERT INTO announced_pu_results SET ?';
      db.query(query, annPuResult, (err, results) => {
        if (err) {
          console.error('Error creating AnnPuResult:', err);
          return callback(err, null);
        }
        callback(null, results.insertId);
      });
    }
  
    // Get all AnnPuResults
    getAllAnnPuResults(callback) {
      const query = 'SELECT * FROM announced_pu_results';
      db.query(query, (err, results) => {
        if (err) {
          console.error('Error getting AnnPuResults:', err);
          return callback(err, null);
        }
        callback(null, results);
      });
    }
  
    // Get results based on pu
    getAnnPuResults(puId, callback) {
      const query = 'SELECT * FROM announced_pu_results WHERE polling_unit_uniqueid = ?';
      db.query(query, [puId], (err, results) => {
        if (err) {
          console.error('Error getting AnnPuResult by ID:', err);
          return callback(err, null);
        }
        callback(null, results);
      });
    }

    // Get a AnnPuResult by uniqueId
    getAnnPuResultById(uniqueId, callback) {
      const query = 'SELECT * FROM announced_pu_results WHERE result_id = ?';
      db.query(query, [uniqueId], (err, results) => {
        if (err) {
          console.error('Error getting AnnPuResult by ID:', err);
          return callback(err, null);
        }
        callback(null, results[0]);
      });
    }
  
    // Update a AnnPuResult by uniqueId
    updateAnnPuResultById(uniqueId, updates, callback) {
      const query = 'UPDATE announced_pu_results SET ? WHERE result_id = ?';
      db.query(query, [updates, uniqueId], (err, results) => {
        if (err) {
          console.error('Error updating AnnPuResult:', err);
          return callback(err, false);
        }
        callback(null, results.affectedRows > 0);
      });
    }
  
    // Delete a AnnPuResult by uniqueId
    deleteAnnPuResultById(uniqueId, callback) {
      const query = 'DELETE FROM announced_pu_results WHERE result_id = ?';
      db.query(query, [uniqueId], (err, results) => {
        if (err) {
          console.error('Error deleting AnnPuResult:', err);
          return callback(err, false);
        }
        callback(null, results.affectedRows > 0);
      });
    }
  }
  
  module.exports = AnnPuResultRepository;