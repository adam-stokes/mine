#!/usr/bin/env node
'use strict';
var meow = require('meow');
var mine = require('./');

var cli = meow({
	help: [
		'Usage',
		'  $ mine [input]',
		'',
		'Examples',
		'  $ mine',
		'  unicorns & rainbows',
		'',
		'  $ mine ponies',
		'  ponies & rainbows',
		'',
		'Options',
		'  --foo  Lorem ipsum. Default: false'
	]
});

console.log(mine(cli.input[0] || 'unicorns'));
