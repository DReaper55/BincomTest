const express = require('express');
const router = express.Router();

const AnnPuResultRepository = require('../../data/database/announced_pu_result_db');
const repo = new AnnPuResultRepository();


// Define a route to handle /getResult endpoint
router.get('/getResult', async (req, res) => {
  const uniqueId = req.query.uniqueId;

  try {
    const results = await getResult(uniqueId);    
    res.json(results);
  } catch (error) {
    console.error('Error fetching result:', error);
    res.status(500).json({ error: 'Error fetching result.' });
  }
});

// Function to get results from the repository
function getResult(puId) {
    return new Promise((resolve, reject) => {
      repo.getAnnPuResults(puId, (err, results) => {
        if (err) {
          reject(err);
        } else {
          resolve(results);
        }
      });
    });
  }

module.exports = router;
