const express = require('express');
const router = express.Router();
const pool = require('../modules/pool')

router.get('/', (req, res) => {
  // Add query to get all genres
  const queryText = `SELECT * FROM "genres"`;
  pool.query(queryText)
    .then(result => {
      res.send(result.rows)
    })
    .catch(err => {
      console.log('Error with Get route for home', err);
      res.sendStatus(500)
    });
});
router.get('/:id', (req, res) => {
  console.log(req.params.id);
  const queryText = `SELECT movies.id, genres.name FROM movies
    JOIN "movies_genres" ON movies.id = "movies_genres".movie_id
    JOIN genres ON movies_genres.genre_id = genres.id
    WHERE movies.id = $1;`

  pool.query(queryText, [req.params.id])
   .then(result => {
     console.log(result.rows);
     res.send(result.rows)
   })
   .catch(error => {
     console.log('error in GET details', error);
     res.sendStatus(500)
   });
})

// router.get('/', (req, res) => {
//   const queryText = `SELECT * FROM "movies";`
//   pool.query(queryText)
//     .then(result => {
//       res.send(result.rows)
//     })
//     .catch(err => {
//       console.log('Error with Get route for home', err);
//       res.sendStatus(500)
//     });
// })

module.exports = router;