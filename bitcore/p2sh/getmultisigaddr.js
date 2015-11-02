var bitcore = require('bitcore-lib');

var neededSignatures = 2;
var path = "m/0";

var masterPubkeys = [
    'xpub68Hqa5gT3qY5bNE9TnSiBWw2ytRTDxxZKXgdTtXEdXqHSNRUQ4FD39aMr8J8ABURvtNQCZvdppWkzGbEh7UPDYESVKnAAPV51iEstY5yAKh',
    'xpub69PRtG17ELw4XCzCP5c6QEhEmJWpyE53cQtEyG7GohZYDjMF7Fu7vBca9M579Dty9s5xgkbLKiUodJjqR6iPnX3x1E8p1fJdgJm1y5H5nym',
    'xpub691WytaTnuoV7p885mcSDJa7DrQ5iyuwK9Vay2RrqxfmAEjS4StwM2VKJuQvS6Gu4W6hgGyjpgZZ6xV8rbwodZxLGs4wMg6QP68KxwF2NJW'
].map(function(key){ return bitcore.HDPublicKey.fromString(key) })

var pubKeys = masterPubkeys.map(function(key){
    return key.derive(path).publicKey
})
console.log(pubKeys.map(function(v){ return v.toString() }));

var redeemScript = bitcore.Script.buildMultisigOut(pubKeys, neededSignatures);
var address = bitcore.Address.fromScript(redeemScript.toScriptHashOut(), 'livenet')
console.log(address.toString())

