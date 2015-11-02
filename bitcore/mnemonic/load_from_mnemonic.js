var bitcore = require('bitcore-lib');
var Mnemonic = require('bitcore-mnemonic');

var wordlist = 'tone inform lawn section property pet donkey machine fruit right calm initial peasant tonight fiction couch jewel tortoise yard arrest describe attend whip moon';
var passphrase = '';
var network = 'livenet';
var mnemonic = new Mnemonic(wordlist, Mnemonic.Words.ENGLISH);
var masterPrivateKey = mnemonic.toHDPrivateKey(passphrase, network);
console.log(masterPrivateKey.toString())

var path = "m/0'";
var masterPublicKey = new bitcore.HDPublicKey(masterPrivateKey.derive(path));
console.log(masterPublicKey.toString());

