const http = require('http');

const games = ['bloodborne','Dark Souls','Dark Souls III', 'Elden Ring'];

const server = http.createServer(async(request, response) => {
    const { method, statusCode, url } = request;

    request.headers.accept = '*';
    request.headers.allow = '*'
    const bodyPromise = new Promise((resolve, reject) => {
        let body;
        request.on('data', data => {
            body = JSON.parse(data)
        })

        request.on('end', data =>{
            resolve(body)
        })
    })

    if (url === '/') {
        response.write('<div><h1>Hello World</h1></div>');
        response.end();
        return
    }
    if (url === '/api/games') {
        if (method === 'GET') {
            response.write(JSON.stringify(games));
            response.end();
            return
        }
        if (method === 'POST') {
            const body = await bodyPromise;
            const {name} = body;
            if (!games.map(game => game.toLowerCase()).includes(name.toLowerCase())) {
                games.push(name.toLowerCase());
            }
            response.write(name.toLowerCase());
            response.end();
            return;
        }

    }

    response.statusCode = 404;
    response.write('<h1>Pagina nao encontrada</h1>');
    response.end();
})

server.listen(3000 , 'localhost', () => {
    console.log(' server running on http://localhost:3000');
});