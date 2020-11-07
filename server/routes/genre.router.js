const express = require('express');
const router = express.Router();
const pool = require('../modules/pool')

router.get('/', (req, res) => {
  // Add query to get all genres
  const queryText = `SELECT * FROM "genres";`
  pool.query(queryText)
    .then(result => {
      res.send(result.rows)
    })
    .catch(err => {
      console.log('Error with Get route for home', err);
      res.sendStatus(500)
    });
});

router.get('/', (req, res) => {
  const queryText = `SELECT * FROM "movies";`
  pool.query(queryText)
    .then(result => {
      res.send(result.rows)
    })
    .catch(err => {
      console.log('Error with Get route for home', err);
      res.sendStatus(500)
    });
})

module.exports = router;