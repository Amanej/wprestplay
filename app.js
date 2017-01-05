var app, express, server;

express = require('express');
const WooCommerceAPI = require('woocommerce-api');

app = express();

// jsonfile
var jsonfile = require('jsonfile');

// Would normally be passed
var settings = require('./settings.json');

var WooCommerce = new WooCommerceAPI({
  url: 'http://www.mrbazaari.com/testwpapi',
  consumerKey: settings.consumerKey,
  consumerSecret: settings.consumerSecret,
  wpAPI: true,
  version: 'wc/v1'
});

app.get('/', function(req, res) {
  var _m = "<h1>WooCommerce api</h1>";
  res.send(_m);
});

app.get('/products', function(req, res) {
  WooCommerce.get('products', function(err, data, result) {
    if(err) {
      console.log(err);
    } else {
      //console.log(data);
      console.log(result);
      _p = JSON.parse(result);
      console.dir(_p);
      res.send(_p);
    }
  });
});

app.get('/createProducts', function(req, res) {
  var name = req.query.name;
  var type = req.query.type;
  var price = req.query.price;
  var price = req.query.desc;

  var _data = {
    name: name,
    type: type,
    regular_price: price,
    description: desc,
    short_description: desc,
    categories: [
      {
        id: 1
      }
    ],
    images: [
      {
        src: "https://upslgp.s3.amazonaws.com/areynolds15/VoronoiSpiralCenterpiece/Vase/images/Vase.jpg",
        position: 0
      }
    ]
  };
  WooCommerce.post('products', data, function(err,data,result) {
    console.log(result);
    res.send(result);
  });
  //res.send(_m);
});

server = app.listen(3030, function() {
  return console.log('Listening on port %d', server.address().port);
});
