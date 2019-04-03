const http = require('http');

http.createServer((req, res) => {
    //res.write('hola mundo');
    res.writeHead(200, {'Content-Type': 'applicatio/json'});

        let salida = {
            'nombre':'Esteban',
            'edad':21,
            'url': req.url
        }
    res.write(JSON.stringify(salida));
    res.end();
}).listen(3000);

console.log('Escuchando el puerto 3000');