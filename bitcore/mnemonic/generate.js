var bitcore = require('bitcore-lib');
var Mnemonic = require('bitcore-mnemonic');

var ent = 256;
var mnemonic = new Mnemonic(ent, Mnemonic.Words.ENGLISH);

console.log(mnemonic.toString())

