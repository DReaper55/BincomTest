
const db = require('../../domain/repositories/mysql_repo');

class PollingUnitRepository {
    // Create a new PollingUnit
    createPollingUnit(pollingUnit, callback) {
      const query = 'INSERT INTO polling_unit SET ?';
      db.query(query, pollingUnit, (err, results) => {
        if (err) {
          console.error('Error creating PollingUnit:', err);
          return callback(err, null);
        }
        callback(null, results.insertId);
      });
    }
  
    // Get all PollingUnits
    getAllPollingUnits(callback) {
      const query = 'SELECT * FROM polling_unit';
      db.query(query, (err, results) => {
        if (err) {
          console.error('Error getting PollingUnits:', err);
          return callback(err, null);
        }
        callback(null, results);
      });
    }
  
    // Get a PollingUnit by uniqueId
    getPollingUnitById(uniqueId, callback) {
      const query = 'SELECT * FROM polling_unit WHERE uniqueid = ?';
      db.query(query, [uniqueId], (err, results) => {
        if (err) {
          console.error('Error getting PollingUnit by ID:', err);
          return callback(err, null);
        }
        callback(null, results[0]);
      });
    }

    // Get polling unit by lga id
    getPollingUnitByLgaId(lgaId, callback) {
      const query = 'SELECT * FROM polling_unit WHERE lga_id = ?';
      db.query(query, [lgaId], (err, results) => {
        if (err) {
          console.error('Error getting PollingUnit by ID:', err);
          return callback(err, null);
        }
        callback(null, results);
      });
    }
  
    // Update a PollingUnit by uniqueId
    updatePollingUnitById(uniqueId, updates, callback) {
      const query = 'UPDATE polling_unit SET ? WHERE uniqueid = ?';
      db.query(query, [updates, uniqueId], (err, results) => {
        if (err) {
          console.error('Error updating PollingUnit:', err);
          return callback(err, false);
        }
        callback(null, results.affectedRows > 0);
      });
    }
  
    // Delete a PollingUnit by uniqueId
    deletePollingUnitById(uniqueId, callback) {
      const query = 'DELETE FROM polling_unit WHERE uniqueid = ?';
      db.query(query, [uniqueId], (err, results) => {
        if (err) {
          console.error('Error deleting PollingUnit:', err);
          return callback(err, false);
        }
        callback(null, results.affectedRows > 0);
      });
    }
  }
  
  module.exports = PollingUnitRepository;