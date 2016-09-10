var settings = require('settings.json');
var WooCommerceAPI = require('woocommerce-api');

var WooCommerce = new WooCommerceAPI({
  url: 'http://www.mrbazaari.com/testwpapi',
  consumerKey: settings.consumerKey,
  consumerSecret: settings.consumerSecret,
  wpAPI: true,
  version: 'wc/v1'
});

// Get Index
WooCommerce.get('', function(err, data, res) {
  //console.log(res);
});


WooCommerce.get('products', function(err, data, res) {
  if(err) {
    console.log(err);
  } else {
    //console.log(data);
    console.log(res);
    _p = JSON.parse(res);
    console.dir(_p);
  }
});

// Create product
var data = {
  name: "3D-printed product",
  type: "simple",
  regular_price: "21.99",
  description: "This is awesome product!",
  short_description: "This is awesome product!",
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

var createProduct = function(data) {
  WooCommerce.post('products', data, function(err,data,res) {
    console.log(res);
  });
};
