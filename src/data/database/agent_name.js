const db = require("../../domain/repositories/mysql_repo");

class AgentNameRepository {
  // Create a new AgentName
  createAgentName(agentName, callback) {
    const query = "INSERT INTO agentname SET ?";
    db.query(query, agentName, (err, results) => {
      if (err) {
        console.error("Error creating AgentName:", err);
        return callback(err, null);
      }
      callback(null, results.insertId);
    });
  }

  // Get all AgentNames
  getAllAgentNames(callback) {
    const query = "SELECT * FROM agentname";
    db.query(query, (err, results) => {
      if (err) {
        console.error("Error getting agentNames:", err);
        return callback(err, null);
      }
      callback(null, results);
    });
  }

  // Get a agentName by uniqueId
  getAgentNameById(uniqueId, callback) {
    const query = "SELECT * FROM agentname WHERE uniqueid = ?";
    db.query(query, [uniqueId], (err, results) => {
      if (err) {
        console.error("Error getting agentName by ID:", err);
        return callback(err, null);
      }
      callback(null, results[0]);
    });
  }

  // Update a agentName by uniqueId
  updateAgentNameById(uniqueId, updates, callback) {
    const query = "UPDATE agentname SET ? WHERE uniqueid = ?";
    db.query(query, [updates, uniqueId], (err, results) => {
      if (err) {
        console.error("Error updating agentName:", err);
        return callback(err, false);
      }
      callback(null, results.affectedRows > 0);
    });
  }

  // Delete a agentName by uniqueId
  deleteAgentNameById(uniqueId, callback) {
    const query = "DELETE FROM agentname WHERE uniqueid = ?";
    db.query(query, [uniqueId], (err, results) => {
      if (err) {
        console.error("Error deleting AgentName:", err);
        return callback(err, false);
      }
      callback(null, results.affectedRows > 0);
    });
  }
}

module.exports = AgentNameRepository;
