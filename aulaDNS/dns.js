const dns = require('node:dns');

// const ipv4 = dns.resolve4(searchedUrl, (err, addresses) => {
//     if (err) {
//         console.log('url nao encontrado');
//         return;
//     }
//     console.log(addresses)
// })

async function bootstrap () {
    const searchedUrl = 'google.com';

    console.time('pesquisando url por DNS padrao');
    const addresses = await dns.promises.resolve4(searchedUrl);
    console.timeEnd('pesquisando url por DNS padrao');
    console.log(addresses);

    const nameServers =  await dns.promises.resolveNs(searchedUrl);
    console.log(nameServers);

    const ipNs = await dns.promises.resolve4(nameServers[1]);

    const resolver = new dns.Resolver();
    resolver.setServers(ipNs);

    console.time('pesquisando url por dns especifico');
    resolver.resolve4(searchedUrl, (error, addressesWithResolver) => {
        if (error){
           console.error('nao foi possivel achar o ipv4');
        }
        console.timeEnd('pesquisando url por dns especifico');
        console.log(addressesWithResolver);
    });
    
}

bootstrap();