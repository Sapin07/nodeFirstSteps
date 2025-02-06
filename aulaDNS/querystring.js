const querystring = require('node:querystring');
const url = require('node:url')

const baseUrl = 'https://sitedeviagem.com.br'

const uri = querystring.stringify({
    destino: 'Rio de Janeiro',
    periodo: 'verao'
})

const fullurl = `${baseUrl}/${uri}`;
console.log(fullurl)

const parsedUri = querystring.parse(uri);
console.log(uri);
console.log(parsedUri);
console.log(url.parse(fullurl));

const uri2 = querystring.escape('Sao Paulo');
console.log(uri2);
const unescapedUri2 = querystring.unescape(uri2)
console.log(unescapedUri2)