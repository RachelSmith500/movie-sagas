const express = require('express');
const router = express.Router();
const pool = require('../modules/pool')

//this is allowing us to get a description for a specific movie
router.get('/:id', (req, res) => {
    console.log(req.params.id);
    const queryText = `SELECT * FROM "movies_genres" WHERE "movie_id" =$1;`
    pool.query(queryText, [req.params.id])
    .then(result => {
        console.log(result.rows);
        res.send(result.rows)
    }).catch(error => {
        console.log('error in GET_DETAILS route', error);
        res.sendStatus(500)
    })

})

module.exports = router;