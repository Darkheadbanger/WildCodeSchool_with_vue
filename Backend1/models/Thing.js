// Creation de schema des donées avec mnogoose
const mongoose = require("mongoose");

// Creation de schema de données qui contient les champs souhaitées
// Indiquant le type ainsi leur caractères (obligatoire ou non, dand notre cas obligatoire)
const thingSchema = mongoose.Schema({
  // Objet, clé/valeur(objet)
  title: { type: String, required: true },
  description: { type: String, required: true },
  imageUrl: { type: String, required: true },
  price: { type: Number, required: true },
});
// On exports le modèle terminer. premier argument, le typpe (le nom du modèle) la deuxième argument est l'objet (le model schema) rendant disponible pour notre application Express
module.exports = mongoose.model("Thing", thingSchema);
