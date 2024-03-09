const express = require('express');
const app = express();
const port = 3000;

const fs = require('fs');
const path = require('path');

const resultPageRoutes = require('./src/delivery/controllers/result_page_ctrl');
const summedTotalPageRoutes = require('./src/delivery/controllers/summed_total_ctrl');
const storeResultsPageRoutes = require('./src/delivery/controllers/store_results_ctrl');

// Serve static files from the irectory
app.use(express.static('src'))

app.use('/', resultPageRoutes);
app.use('/', summedTotalPageRoutes);
app.use('/', storeResultsPageRoutes);

// Set EJS as the view engine
app.set('view engine', 'html');

// Endpoint for the home page
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'src', 'index.html'));
});

// Endpoint for result page
app.get('/result-page', (req, res) => {
  res.sendFile(path.join(__dirname, 'src', 'delivery', 'presentation', 'result-page.html'));
});

// Result View directory setup
app.set('views', path.join(__dirname, 'src', 'delivery', 'presentation', 'fragments'));
  

// Endpoint for summed total result page
app.get('/summed-total-page', (req, res) => {
  res.sendFile(path.join(__dirname, 'src', 'delivery', 'presentation', 'summed-total-page.html'));
});

// Endpoint for results page to store a new result
app.get('/store-results-page', (req, res) => {
  res.sendFile(path.join(__dirname, 'src', 'delivery', 'presentation', 'store-results-page.html'));
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});


const sqlFilePath = './asset/bincom_test.sql';

const sqlService = require("./src/domain/services/sqlservice");

// Execute the sql file to save the data to database
// sqlService.executeSqlFile(sqlFilePath, (err) => {
//   if (err) {
//     console.error('Error executing SQL file:', err);
//   } else {
//     console.log('SQL file executed successfully');
//   }
// });
