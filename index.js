module.exports = coffee;

function coffee ( code, options ) {
	if ( options.sourceMap ) {
		console.log( 'gobble-coffee does not currently support source maps' );
		options.sourceMap = false;
	}

	return require( 'coffee-script' ).compile( code, options );
}

coffee.defaults = {
	accept: '.coffee',
	ext: '.js'
};
