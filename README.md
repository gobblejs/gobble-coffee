# gobble-coffee

Compile CoffeeScript files with gobble.

## Installation

First, you need to have gobble installed - see the [gobble readme](https://github.com/gobblejs/gobble) for details. Then,

```bash
npm i -D gobble-coffee
```

## Usage

```js
var gobble = require( 'gobble' );

module.exports = gobble( 'src' ).map( 'coffee' );
```

## Source code

```js
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
```


## License

MIT. Copyright 2014 Rich Harris
