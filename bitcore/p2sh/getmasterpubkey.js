var bitcore = require('bitcore-lib');
var Mnemonic = require('bitcore-mnemonic');

var memonics = [
    'tone inform lawn section property pet donkey machine fruit right calm initial peasant tonight fiction couch jewel tortoise yard arrest describe attend whip moon',
    'price squeeze plate symptom private genre found total guard vote donate taste market wrist gas flag clever pride sustain cross goose retire chuckle inhale',
    'hill glance wisdom glide useful century ladder chase indicate shaft mammal initial defense visa lunar riot speak clock brush field ill define hard north'
].map(function(phrase){
    return new Mnemonic(phrase, Mnemonic.Words.ENGLISH)
})

var path = "m/0'";
var passphrase = '';
var network = 'livenet';
var xprivKeys = memonics.map(function(memonic){ return memonic.toHDPrivateKey(passphrase, network).derive(path) })
var xpubKeys = xprivKeys.map(function(privkey){ return new bitcore.HDPublicKey(privkey) })

console.log(xprivKeys.map(function(v){ return v.toString() }));
console.log(xpubKeys.map(function(v){ return v.toString() }));
