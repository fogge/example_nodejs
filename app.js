// Require Express - a webserver module
const express = require('express');

// Require the person info
const movies = require('./movies.json');

// Create express server
const app = express();

app.use(express.static('www'));

// A route using params
app.get('/films/title/:movieTitle', (req, res) => {
  let chosenMoviesByTitle = movies.filter((movie) =>
    movie.title.toLowerCase().includes(req.params.movieTitle.toLowerCase())
  );
  res.json(chosenMoviesByTitle);
});

app.get('/films/genre/:movieGenre', (req, res) => {
  let chosenMoviesByGenre = movies.filter((movie) => {
    for (let i = 0; i < movie.genres.length; i++) {
      if (movie.genres[i].toLowerCase() == req.params.movieGenre.toLowerCase()) {
        return true
      }
    }
  });
  res.json(chosenMoviesByGenre);
});


// Respond to everything else
app.get('*', (req,res) => {
  res.send('Glad you are here!');
});

// Start the webserver
app.listen(3000, ()=> {
  console.log('Listening on port 3000.');
});
