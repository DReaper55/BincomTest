const express = require('express');
const router = express.Router();

const PollingUnitRepository = require('../../data/database/polling_unit_db');
const LgaRepository = require('../../data/database/lga_db');

const puRepo = new PollingUnitRepository();
const lgaRepo = new LgaRepository();


// Define a route to handle /getAllLgas endpoint
router.get('/getAllLgas', async (req, res) => {
  try {
    const results = await getAllLgas();    
    res.json(results);
  } catch (error) {
    console.error('Error fetching result:', error);
    res.status(500).json({ error: 'Error fetching result.' });
  }
});

// Function to get results from the repository
function getAllLgas() {
    return new Promise((resolve, reject) => {
        lgaRepo.getAllLgas((err, results) => {
        if (err) {
          reject(err);
        } else {
          resolve(results);
        }
      });
    });
  }

  // Define a route to handle /getPollingUnitsByLgaId endpoint
router.get('/getPollingUnitsByLgaId', async (req, res) => {
    const lgaId = req.query.lgaId;
  
    try {
      const results = await getPollingUnitsByLgaId(lgaId);    
      res.json(results);
    } catch (error) {
      console.error('Error fetching result:', error);
      res.status(500).json({ error: 'Error fetching result.' });
    }
  });
  
  // Function to get results from the repository
  function getPollingUnitsByLgaId(lgaId) {
      return new Promise((resolve, reject) => {
        puRepo.getPollingUnitByLgaId(lgaId, (err, results) => {
          if (err) {
            reject(err);
          } else {
            resolve(results);
          }
        });
      });
    }

    // Define a route to handle /createPollingUnit endpoint
router.post('/createPollingUnit', async (req, res) => {
    try {
      const pollingUnitData = req.body;
        const pollingUnitId = await createPollingUnit(pollingUnitData);
  
        pollingUnitData.polling_unit_id = pollingUnitId;
  
      const resultId = await createAnnPuResult(pollingUnitData);
  
      // Send the result ID in the response
      res.json({ resultId });
    } catch (error) {
      console.error('Error creating AnnPuResult:', error);
      res.status(500).json({ error: 'Error creating AnnPuResult.' });
    }
  });
  
  // Function to create PollingUnit
  function createPollingUnit(pollingUnitData) {
    return new Promise((resolve, reject) => {
      puRepo.createPollingUnit(pollingUnitData, (err, pollingUnitId) => {
        if (err) {
          reject(err);
        } else {
          resolve(pollingUnitId);
        }
      });
    });
  }

module.exports = router;
