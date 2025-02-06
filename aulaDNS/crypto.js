const crypto = require('node:crypto');

const chave = crypto.randomBytes(4).toString('ascii');
console.log(chave);

const uuid = crypto.randomUUID();
console.log(uuid);

const {privateKey, publicKey} = crypto.generateKeyPairSync('rsa', {modulusLength: 2048});
console.log(privateKey)
console.log(publicKey)