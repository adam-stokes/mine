# mine [![Build Status](https://travis-ci.org/battlemidget/mine.svg?branch=master)](https://travis-ci.org/battlemidget/mine)

> Process install specs


## Install

```
$ npm install --save battlemidget/mine
```


## Usage

```js
var mine = require('mine');

mine('unicorns');
//=> unicorns & rainbows
```


## CLI

```
$ npm install --global mine
```
```
$ mine --help

  Usage
    mine [input]

  Example
    mine
    unicorns & rainbows

    mine ponies
    ponies & rainbows

  Options
    --foo  Lorem ipsum. Default: false
```


## API

### mine(input, [options])

#### input

*Required*  
Type: `string`

Lorem ipsum.

#### options

##### foo

Type: `boolean`  
Default: `false`

Lorem ipsum.


## License

MIT © [Adam Stokes](http://battlemidget/mine)
