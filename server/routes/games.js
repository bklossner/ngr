const express = require('express');

/**
 * @description Initialize the Router
 * @type {Router|router}
 */
const router = express.Router();

/**
 * @description Takes in the sql, request, response, and outputs the sql result in JSON format
 * @param sql The SQL to run
 * @param req The request object
 * @param res The response object
 */
function runSQL(sql, req, res) {
  
  // Execute query
  res.locals.connection.query(sql, function (error, results, fields) {
    if(error) {
      console.error('error connecting: ' + error.stack);
      throw error;
    }
    // Send the response to the browser, in JSON format
    res.send(JSON.stringify(results));
  });
}

/**
 * @description Return all games from the database
 * @example http://someurl/games
 */
router.get('/', function (req, res) {
  
  /**
   * @description SQL to return all games in the database
   * @type {string} allGamesSQL
   */
  const allGamesSQL = `
    select game.id, game.title, genre.genre, developer.developer,
           rating.rating, release_year.release_year, to_base64(game.screenshot) as 'screenshot'
    from game, genre, developer, rating, release_year
    where game.genre_id = genre.id and
          game.developer_id = developer.id and
          game.year_id = release_year.id and
          game.rating_id = rating.id
    order by game.genre_id`;
  
  runSQL(allGamesSQL, req, res);
});

/**
 * @description Return individual game from the database with the given id
 * @example http://someurl/games/[gameId]
 */
router.get('/:gameId', function (req, res) {
  
  /**
   * @description SQL to return all games in the database
   * @type {string} allGamesSQL
   */
  const allGamesSQL = `
    select game.id, game.title, genre.genre, developer.developer,
           rating.rating, release_year.release_year, game.screenshot
    from game, genre, developer, rating, release_year
    where game.genre_id = genre.id and
          game.developer_id = developer.id and
          game.year_id = release_year.id and
          game.rating_id = rating.id and
          game.id = ${req.params.gameId}
    order by game.genre_id`;
  
  runSQL(allGamesSQL, req, res);
});

/**
 * @description Export the router object
 * @type {Router|router}
 */
module.exports = router;
