var bitcore = require('bitcore-lib');

var path = "m/0";

var masterPubkey = 'xpub68Hqa5gT3qY5bNE9TnSiBWw2ytRTDxxZKXgdTtXEdXqHSNRUQ4FD39aMr8J8ABURvtNQCZvdppWkzGbEh7UPDYESVKnAAPV51iEstY5yAKh';

var hdPubkey = bitcore.HDPublicKey.fromString(masterPubkey);
var pubKey = hdPubkey.derive(path).publicKey;
var address = pubKey.toAddress();

console.log(pubKey.toString());
console.log(address.toString());

