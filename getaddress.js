var bitcore = require('bitcore-lib');
var Mnemonic = require('bitcore-mnemonic');

var list = []
/*
list.push(new Mnemonic(256, Mnemonic.Words.ENGLISH));
list.push(new Mnemonic(256, Mnemonic.Words.ENGLISH));
list.push(new Mnemonic(256, Mnemonic.Words.ENGLISH));
*/
list.push(new Mnemonic('tone inform lawn section property pet donkey machine fruit right calm initial peasant tonight fiction couch jewel tortoise yard arrest describe attend whip moon', Mnemonic.Words.ENGLISH));
list.push(new Mnemonic('price squeeze plate symptom private genre found total guard vote donate taste market wrist gas flag clever pride sustain cross goose retire chuckle inhale', Mnemonic.Words.ENGLISH));
list.push(new Mnemonic('hill glance wisdom glide useful century ladder chase indicate shaft mammal initial defense visa lunar riot speak clock brush field ill define hard north', Mnemonic.Words.ENGLISH));

var keys = list.map(function(v){
    return new bitcore.HDPublicKey(v.toHDPrivateKey().derive("m/0'"), 'livenet')
}).map(function(v){
    return v.publicKey
})
//  ソート必要か確認する
var redeemScript = bitcore.Script.buildMultisigOut(keys, 2);
var script = redeemScript.toScriptHashOut();
var address = bitcore.Address.fromScript(script, 'livenet')
console.log(address.toString())

