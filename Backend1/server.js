const http = require("http");
const app = require("./app");
// la function normalizePort permet de renvoyer le port valide, qu'il sois fournit
// sous la forme d'un numéro ou d'une chaine de charactères
const normalizePort = (val) => {
  const port = parseInt(val, 10);

  if (isNaN(port)) {
    return val;
  }
  if (port >= 0) {
    return port;
  }
  return false;
};
// la function normalizePort écoute le serveur 3000 si non process.env.PORT
const port = normalizePort(process.env.PORT || "3000");
app.set("port", port);
//  La funciton  rechercehs des differents erreurs et les gère de manière approprié.
// Elle est ensuite enregistrée dans le serveur
const errorHandler = (error) => {
  if (error.syscall !== "listen") {
    throw error;
  }
  const address = server.address();
  const bind =
    typeof address === "string" ? "pipe " + address : "port: " + port;
  switch (error.code) {
    case "EACCES":
      console.error(`${bind} requires elevated privileges.`);
      process.exit(1);
      break;
    case "EADDRINUSE":
      console.error(`${bind} is already in use.`);
      process.exit(1);
      break;
    default:
      throw error;
  }
};
//  Un écouteur d'evenements est également enregistré, consignant le port ou le canal nommé sur lequel le serveur
// s'execute dans le console
const server = http.createServer(app);

server.on("error", errorHandler);
server.on("listening", () => {
  const address = server.address();
  const bind = typeof address === "string" ? "pipe " + address : "port " + port;
  console.log(`Listening on ${bind}`);
});

server.listen(port);
