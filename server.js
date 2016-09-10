'use strict';
var settings = require('settings.json');
const express = require('express');
const path = require('path');

const PORT = 8082;

// WooCommerce
var WooCommerceAPI = require('woocommerce-api');

var WooCommerce = new WooCommerceAPI({
  url: 'http://www.mrbazaari.com/testwpapi',
  consumerKey: settings.consumerKey,
  consumerSecret: settings.consumerSecret,
  wpAPI: true,
  version: 'wc/v1'
});

// App
const app = express();
app.get('/', function (req, res) {
  res.send('Hello world\n');
});
app.get('/woocommerce', function(req,result) {
  var _p;
  WooCommerce.get('products', function(err, data, res) {
    if(err) {
      console.log(err);
    } else {
      //console.log(data);
      //console.log(res);
      var _p = JSON.parse(res);
      console.dir(_p[0]);
      result.send(_p[0]);
    }
  });
  //result.send(_p);
});

app.listen(PORT);
console.log('Running on http://localhost:' + PORT);
