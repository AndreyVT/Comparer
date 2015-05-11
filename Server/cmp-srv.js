var restify = require('restify');
var cookieParser = require('restify-cookies');

var shop = require('./shop.js');
var purchase = require('./purchase.js');
var item = require('./item.js');
var record = require('./record.js');
var users = require('./user.js');

var app = restify.createServer();

app.use(restify.CORS({}));

app.use(restify.fullResponse());
app.use(restify.bodyParser());
app.use(restify.queryParser());
app.use(cookieParser());

// fulfils pre-flight/promise request
/*app.pre(function(req, res) {
    console.log('==== app use  1 ');
    res.send(200);
});*/

// apply this rule to all requests accessing any URL/URI
app.pre(function(req, res, next) {

   // console.log('==== app PRE  :: ', req.headers);
    if (req.method === 'OPTIONS'){
        req.method = 'POST';
    }

    // add details of what is allowed in HTTP request headers to the response headers
    res.header('Access-Control-Allow-Origin', req.headers.origin);
    res.header('Access-Control-Allow-Methods', 'POST, GET, PUT, DELETE, OPTIONS');
    res.header('Access-Control-Allow-Credentials', false);
    res.header('Access-Control-Max-Age', '86400');
    res.header('Access-Control-Allow-Headers', 'X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept');

    /*if (!req.headers.cookie)
    {
        res.header('Set-Cookie', 'cmprsrv=test cookie!; domain=localhost; expires=Mon, 18 May 2015 09:52:04 GMT;');
        //response.setHeader('Set-Cookie', session.getSetCookieHeaderValue());
    }*/
    // the next() function continues execution and will move onto the requested URL/URI
    next();
});

/*app.use(function(req, res, next) {
    var cookies = req.cookies;
    console.log('==== APP PRE :: ', cookies);

    if (!cookies.cmprsrv){
        console.log('==== set cookie ? :: ');
        var dateExpires = new Date();
        dateExpires.setDate(dateExpires.getDate() + 7);
        res.setCookie('cmprsrv', 'cmpr-srv test cookie!', {domain:'http://localhost:7777', expires: dateExpires});
    };

    next();
});*/
/*app.use(function(req, res, next) {
  console.log('==== app use  ' + req.body);

    if (req.params.itemId) {
      Model.Item.findById(req.params.itemId, function(err, item) {
      req.item = item;
      next();
    });
  }
  else {
    next();
  }
});*/
 
    ////////////  SHOP   ///////////////////////////////////////////////////////////////////////////////////
    // GET ALL SHOPS
    // Get full list of shops
    app.get('/api/v1/shops/', shop.get);
    // GET SHOP
    // Get one shop by id
    app.get('/api/v1/shops/:id', shop.getById);
    // CREATE
    // Create new shop
    app.post('/api/v1/shops/', shop.createShop);
    // UPDATE SHOP IN DB
    // Обновить существующую запись
    app.put('/api/v1/shops/:id', shop.update);
    ////////////////////////////////////////////////////////////////////////////////////////////////////////

    ////////////  PURCHASES   ///////////////////////////////////////////////////////////////////////////////////
    // GET PURCHASES
    // Get list for userId
    app.get('/api/v1/purchases/:userId', purchase.get);
    // GET purchase
    // Get one purchase by id
    app.get('/api/v1/purchase/:id', purchase.getById);
    // CREATE
    // Create new purchase
    app.post('/api/v1/purchase/', purchase.createPurchase);
    // UPDATE purchase IN DB
    // Обновить существующую запись
    app.post('/api/v1/purchase/:id', purchase.update);
    ////////////////////////////////////////////////////////////////////////////////////////////////////////

    ////////////  ITEMS   ///////////////////////////////////////////////////////////////////////////////////
    // GET ITEMS
    // Get list items by subsrt
    app.get('/api/v1/items/:substr', item.get);
    // GET item
    // Get one item by id
    app.get('/api/v1/item/:id', item.getById);
    // CREATE
    // Create new item
    app.post('/api/v1/item/', item.createItem);
    // UPDATE item IN DB
    // Обновить существующую запись
    app.put('/api/v1/item/:id', item.update);
    ////////////////////////////////////////////////////////////////////////////////////////////////////////

    ////////////  RECORDS   ///////////////////////////////////////////////////////////////////////////////////
    // GET RECORDS
    // Get list records by purchaseId by subsrt
    app.get('/api/v1/records/:PurchaseId', record.get);
    // GET record
    // Get one record by id
    app.get('/api/v1/record/:id', record.getById);
    // CREATE
    // Create new record
    app.post('/api/v1/record/', record.createRecord);
    // UPDATE record IN DB
    // Обновить существующую запись
    app.put('/api/v1/record/:id', record.update);
    ////////////////////////////////////////////////////////////////////////////////////////////////////////

    ////////////  USERS   ///////////////////////////////////////////////////////////////////////////////////
    // GET USERS
    // Get list users
    app.get('/api/v1/users/', users.get);
    // GET user
    // Get one record by id
    app.get('/api/v1/user/:id', users.getById);
    // CREATE
    // Create new record
    app.post('/api/v1/user/', users.createUser);
    // UPDATE record IN DB
    // Обновить существующую запись
    //app.put('/api/v1/user/:id', users.update);
    // login user
    app.post('/api/v1/user/login', users.login);
    ////////////////////////////////////////////////////////////////////////////////////////////////////////

app.listen(7777, function() {
    console.log('%s listening at1 %s', app.name, app.url);
});


