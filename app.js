import http from "node:http";

const server = http.createServer((req, res) => {
  res.end("hola mundo");
});

server.listen(3000);
console.log("servidor activo en puerto 3000");
