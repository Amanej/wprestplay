var WP = require( 'wordpress-rest-api' );
var wp = new WP({ endpoint: settings.website });

// get posts
wp.posts().get(function( err, data ) {
    if ( err ) {
        // handle err
        console.log("I got an error");
        console.log(err);
    }
    // do something with the returned posts
    console.log("I got an error");
    console.log(data);
});
