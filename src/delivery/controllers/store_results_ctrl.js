const express = require('express');
const router = express.Router();

const WardRepository = require('../../data/database/ward_db');
const PartyRepository = require('../../data/database/party_db');

const wardRepo = new WardRepository();
const partyRepo = new PartyRepository();


// Define a route to handle /getAllParties endpoint
router.get('/getAllParties', async (req, res) => {
  try {
    const results = await getAllParties();
    res.json(results);
  } catch (error) {
    console.error('Error fetching result:', error);
    res.status(500).json({ error: 'Error fetching result.' });
  }
});

// Function to get results from the repository
function getAllParties() {
    return new Promise((resolve, reject) => {
        partyRepo.getAllPartys((err, results) => {
        if (err) {
          reject(err);
        } else {
          resolve(results);
        }
      });
    });
  }

  // Define a route to handle /getWardsByLgaId endpoint
router.get('/getWardsByLgaId', async (req, res) => {
    const lgaId = req.query.lgaId;
    try {
      const results = await getWardsByLgaId(lgaId);    
      
      res.json(results);
    } catch (error) {
      console.error('Error fetching result:', error);
      res.status(500).json({ error: 'Error fetching result.' });
    }
  });
  
  // Function to get results from the repository
  function getWardsByLgaId(lgaId) {
      return new Promise((resolve, reject) => {
        wardRepo.getWardByLgaId(lgaId, (err, results) => {
          if (err) {
            reject(err);
          } else {
            resolve(results);
          }
        });
      });
    }

    // Define a route to handle /createAnnPuResult endpoint
router.post('/createAnnPuResult', async (req, res) => {
    try {
      // Parse the request body
      const pollingUnitData = req.body;
  
      // Call the method to create AnnouncedPuResult
      const resultId = await createAnnPuResult(pollingUnitData);
  
      // Send the result ID in the response
      res.json({ resultId });
    } catch (error) {
      console.error('Error creating AnnPuResult:', error);
      res.status(500).json({ error: 'Error creating AnnPuResult.' });
    }
  });
  
  // Function to create AnnouncedPuResult
  function createAnnPuResult(pollingUnitData) {
    return new Promise((resolve, reject) => {
      // Call the method from the repository
      annPuResultRepo.createAnnPuResult(pollingUnitData, (err, resultId) => {
        if (err) {
          reject(err);
        } else {
          resolve(resultId);
        }
      });
    });
  }

module.exports = router;
