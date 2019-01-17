const Movies = require('../../models/Movies');

module.exports = app => {
  app.get('/api/movies', (req, res, next) => {
    Movies.find()
      .exec()
      .then(movie => res.json(movie))
      .catch(err => next(err));
  });

  app.post('/api/movies', (req, res, next) => {
    const movie = new Movies(req.body);

    movie
      .save()
      .then(() => res.json(movie))
      .catch(err => next(err));
  });

  app.put('/api/movies/edit/:id', (req, res, next) => {
    const id = req.params.id;

    Movies.findByIdAndUpdate(id, req.body)
      .exec()
      .then(movie => {
        res.json(movie);
      })
      .catch(err => next(err));
  });

  app.delete('/api/movies/delete/:id', (req, res, next) => {
    const id = req.params.id;

    Movies.findByIdAndDelete(id)
      .exec()
      .then(movie => res.json())
      .catch(err => next(err));
  });
};
