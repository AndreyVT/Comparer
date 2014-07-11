var restify = require('restify');
var Item = require('models').Item;
var app = restify.createServer()
 
app.use(function(req, res, next) {
  if (req.params.itemId) {
    Item.findById(req.params.itemId, function(err, item) {
      req.item = item;
      next();
    });
  }
  else {
    next();
  }
});
 
app.get('/api/items/:itemId', function(req, res, next) {
  res.send(200, req.item);
});
 
app.put('/api/items/:itemId', function(req, res, next) {
  req.item.set(req.body);
  req.item.save(function(err, item) {
    res.send(204, item);
  });
});
 
app.post('/api/items/:itemId', function(req, res, next) {
  var item = new Item(req.body);
  item.save(function(err, item) {
    res.send(201, item);
  });
});
 
app.delete('/api/items/:itemId', function(req, res, next) {
  req.item.remove(function(err) {
    res.send(204, {});
  });
});
 
app.listen(8080);