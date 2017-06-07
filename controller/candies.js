module.exports = function (app) {
  let candies = [
    { id: 1, name: 'Chewing Gum', color: 'Red' },
    { id: 2, name: 'Pez', color: 'Green' },
    { id: 3, name: 'Marshmallow', color: 'Pink' },
    { id: 4, name: 'Candy Stick', color: 'Blue' }
  ];

  //index
  app.get('/candies', (req, res) => {
    res.json(candies);
  });

  //show
  app.get('/candies/:id', (req, res) => {
    const id = req.params.id;
    let selected = candies.filter((candy) => {
        return candy.id == id;
    })[0];
    res.json(selected);
  });

  //post
  app.post('/candies', (req, res) => {
    candies.push(req.body);
    res.json(candies);
  });

  //put
  app.put('/candies/:id', (req, res) => {
    const id = req.params.id;
    let selected = candies.filter((candy) => {
      return candy.id == id;
    })[0];
    selected.id = req.body.id;
    selected.name = req.body.name;
    selected.color = req.body.color;

    res.json(candies);
  });

  //delete
  app.delete('/candies/:id', (req, res) => {
    const id = req.params.id;

    candies = candies.filter((candy) => {
        return candy.id != id;
    });

    res.json(candies);
   });

}
