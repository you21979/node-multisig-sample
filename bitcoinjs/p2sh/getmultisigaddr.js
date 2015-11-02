var bitcoin = require('bitcoinjs-lib');

var neededSignatures = 2
var path = "0".split('/');

var masterPubkeys = [
    'xpub68Hqa5gT3qY5bNE9TnSiBWw2ytRTDxxZKXgdTtXEdXqHSNRUQ4FD39aMr8J8ABURvtNQCZvdppWkzGbEh7UPDYESVKnAAPV51iEstY5yAKh',
    'xpub69PRtG17ELw4XCzCP5c6QEhEmJWpyE53cQtEyG7GohZYDjMF7Fu7vBca9M579Dty9s5xgkbLKiUodJjqR6iPnX3x1E8p1fJdgJm1y5H5nym',
    'xpub691WytaTnuoV7p885mcSDJa7DrQ5iyuwK9Vay2RrqxfmAEjS4StwM2VKJuQvS6Gu4W6hgGyjpgZZ6xV8rbwodZxLGs4wMg6QP68KxwF2NJW'
].map(function(key){ return bitcoin.HDNode.fromBase58(key) });

var derivePubkey = function(m, path) {
    path.forEach(function(p) {
        m = m.derive(p);
    });
    return m.getPublicKeyBuffer()
}

var pubKeys = masterPubkeys.map(function(key){ return derivePubkey(key, path) }).sort(Buffer.compare)
console.log(pubKeys.map(function(v){ return v.toString('hex') }))

var redeemScript = bitcoin.script.multisigOutput(neededSignatures, pubKeys) 
var scriptPubKey = bitcoin.script.scriptHashOutput(bitcoin.crypto.hash160(redeemScript));
var multisigaddr = bitcoin.address.fromOutputScript(scriptPubKey, bitcoin.networks.bitcoin);
var addr = multisigaddr.toString();
console.log(addr);
