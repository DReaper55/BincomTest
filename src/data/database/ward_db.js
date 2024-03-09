
const db = require('../../domain/repositories/mysql_repo');

class WardRepository {
    // Create a new ward
    createWard(ward, callback) {
      const query = 'INSERT INTO ward SET ?';
      db.query(query, ward, (err, results) => {
        if (err) {
          console.error('Error creating ward:', err);
          return callback(err, null);
        }
        callback(null, results.insertId);
      });
    }
  
    // Get all wards
    getAllWards(callback) {
      const query = 'SELECT * FROM ward';
      db.query(query, (err, results) => {
        if (err) {
          console.error('Error getting wards:', err);
          return callback(err, null);
        }
        callback(null, results);
      });
    }
  
    // Get a ward by uniqueId
    getWardById(uniqueId, callback) {
      const query = 'SELECT * FROM ward WHERE uniqueid = ?';
      db.query(query, [uniqueId], (err, results) => {
        if (err) {
          console.error('Error getting ward by ID:', err);
          return callback(err, null);
        }
        callback(null, results[0]);
      });
    }

    // Get a ward by local governemt id
    getWardByLgaId(lgaId, callback) {
      const query = 'SELECT * FROM ward WHERE lga_id = ?';
      db.query(query, [lgaId], (err, results) => {
        if (err) {
          console.error('Error getting ward by lga ID:', err);
          return callback(err, null);
        }
        callback(null, results);
      });
    }
  
    // Update a ward by uniqueId
    updateWardById(uniqueId, updates, callback) {
      const query = 'UPDATE ward SET ? WHERE uniqueid = ?';
      db.query(query, [updates, uniqueId], (err, results) => {
        if (err) {
          console.error('Error updating ward:', err);
          return callback(err, false);
        }
        callback(null, results.affectedRows > 0);
      });
    }
  
    // Delete a ward by uniqueId
    deleteWardById(uniqueId, callback) {
      const query = 'DELETE FROM ward WHERE uniqueid = ?';
      db.query(query, [uniqueId], (err, results) => {
        if (err) {
          console.error('Error deleting ward:', err);
          return callback(err, false);
        }
        callback(null, results.affectedRows > 0);
      });
    }
  }
  
  module.exports = WardRepository;