const http = require('http');

const host = '0.0.0.0';
const port = 3000;

const requestListener = function (req, res) {
    res.writeHead(200);
    res.end("Hola Mundo desde Docker 🚀\n");
};

const server = http.createServer(requestListener);
server.listen(port, host, () => {
    console.log(`Servidor corriendo en http://${host}:${port}`);
});