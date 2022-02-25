const express = require("express");
const res = require("express/lib/response");
const mongoose = require("mongoose");
// Appelé la méthode express() pour l'utiliser
const app = express();
// Une méthode pour reocnnaitre toutes les requetes d'objet en tant que l'objet JSON
app.use(express.json());
// Enregistrement de la routes dans le dossier routes
const stuffRoutes = require("./routes/stuff");
// Pour se connecter au mongoDB
mongoose
  .connect(
    "mongodb+srv://DavidBouhaben:gHFjACX9jiCpOBiL@cluster0.hgpty.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => console.log("Connexion à MongoDB réussie !"))
  .catch(() => console.log("Connexion à mongoDB échouée"));

//Pour éviter le problème de CORS en mettant n'importe quelle origine avec *
// Mais pour la sécurité, on va mettre l'addresse du front-end sur env
// Envoyes des requetes avec les méthodes mentionnées (Get,Post etc)
// D'ajouters les headers mentionnées aux requêtes envoyées vers notre API(Origin, X-Requested-With etc)
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, PATCH, OPTIONS"
  );
  next();
});

// Enregistrement le routeur pour toutes demandes effectués (dans le dossier routes/stuff.js) vers l'URL /api/stuff
app.use("/api/stuff", stuffRoutes);

module.exports = app;
