const router = require('express').Router();
const Movie = require('../models/Movie.model');

router.get('/movies', async (req, res) => {
  const moviesFromDB = await Movie.find();
  console.log(moviesFromDB);
  res.render('movies/movies', { movies: moviesFromDB });
});

router.get('/movie/:id', async (req, res) => {
  const movies = await Movie.findById(req.params.id);
  console.log(movies);
  res.render('movies/movie-details', movies);
});

module.exports = router;
