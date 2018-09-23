const express = require('express');

/**
 * @description Initialize the Router
 * @type {Router|router}
 */
const router = express.Router();

/**
 * @description Return all games from the database
 * @example http://someurl/games
 */
router.get('/', function (req, res) {
  res.send("Games router - Not Implemented")
});

/**
 * @description Return individual game from the database with the given id
 * @example http://someurl/games/[gameId]
 */
router.get('/:gameId', function (req, res) {
  res.send("Game ID router - Not Implemented. Game Id: " + req.params.gameId);
});

/**
 * @description Export the router object
 * @type {Router|router}
 */
module.exports = router;
