const router = require('express').Router();
const Movie = require('../models/Movie.model');

router.get('/movies', async (req, res) => {
  const moviesFromDB = await Movie.find();
  res.render('.views/movies/movies', { movies: moviesFromDB });
});

router.get('/movie/:id', async (req, res) => {
  const movies = await Movie.findById(req.params.id);
  res.render('.views/movies/movie-details', movies);
});

module.exports = router;
