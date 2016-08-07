var WooCommerceAPI = require('woocommerce-api');

var WooCommerce = new WooCommerceAPI({
  url: 'http://www.mrbazaari.com/testwpapi',
  consumerKey: 'ck_846e0b97cb4ccec71e17312316f9348b03d2b784',
  consumerSecret: 'cs_7ad6ee177a7b015bbd18a8ba9ad887e72e1e7036',
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
