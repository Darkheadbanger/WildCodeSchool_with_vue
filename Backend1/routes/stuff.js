const express = require("express");
// Creation de routeur
const router = express.Router();
// Le controllers stuff pour importer la logique métier qui se trouve dans le dossier controlelrs.stuff.js
const stuffCtrl = require("../controllers/stuff");

// Creation des differents routes pour CRUD
router.post("/", stuffCtrl.createThings);
// Pour modification la modification
router.put("/:id", stuffCtrl.modifyThing);
// La route pour la suppression de l'objet
router.delete("/:id", stuffCtrl.deleteThing);
// On va juste afficheer (get) un seul nom en récuperant son id
router.get("/:id", stuffCtrl.getOneThing);
// Mettre le endopoint, la route ou
// Il s'agit de l'URL de l'routerlication front-end
router.get("/", stuffCtrl.getAllStuff);

module.exports = router;
