const Distributors = require('../../models/Distributors');

module.exports = app => {
  app.get('/api/distributors', (req, res, next) => {
    Distributors.find()
      .exec()
      .then(distributor => res.json(distributor))
      .catch(err => next(err));
  });

  app.post('/api/distributors', (req, res, next) => {
    const distributor = new Distributors(req.body);

    distributor
      .save()
      .then(() => res.json(distributor))
      .catch(err => next(err));
  });

  app.put('/api/distributors/edit/:id', (req, res, next) => {
    const id = req.params.id;

    Distributors.findByIdAndUpdate(id, req.body)
      .exec()
      .then(distributor => {
        res.json(distributor);
      })
      .catch(err => next(err));
  });

  app.delete('/api/distributors/delete/:id', (req, res, next) => {
    const id = req.params.id;
    
    Distributors.findByIdAndDelete(id)
      .exec()
      .then((distributor) => res.json())
      .catch((err) => next(err));
  });
};
