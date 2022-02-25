// On require le model Thing
const Thing = require("../models/Thing");
  
// Enregistre uniquement la logique métier de chaque routes
exports.createThings = (req, res, next) => { 
  // On efface l'id 
  delete req.body._id; 
  // On récupère toutes
  const thing = new Thing({
    // On copie les champs dans le body de la request (sur Thing.js) avec operateur Spread sauf l'id
    ...req.body,
  });
  thing
    .save() // On le sauvegarde dans la base de données
    // Une prmise pour dire si c'est ok on pren then si non c'est catch
    .then(() => res.status(201).json({ message: "Post enregistrée!" }))
    .catch((error) => {
      console.error(`Post ${error.message}`);
      return res.status(400).json({ error });
    });
};
exports.modifyThing = (req, res, next) => {
  // Nous utilisons la méthode updateOne pour pouvoir modifier notre modèle Thing
  // Le permier argument permet de comparer l'objet pour savoir quel objet a modifier, id du modèle est égale a l'id envoyé a la paramètre de la requete
  // Ensuite, la deuxième argument, c'est la nouvelle version de l'objet et pour être sur, recuperer le Ting dans le corps de la requete, l'id correspond a celui de la pramètre
  const thing = new Thing({ ...req.body });
  Thing.updateOne({ _id: req.params.id }, { ...req.body, _id: req.params.id })
    .then(() => res.status(200).json({ message: "Objet modifié !" }))
    .catch((error) => {
      console.error(`Modification ${error.message}`);
      return res.status(400).json({ error });
    });
};

exports.deleteThing = (req, res, next) => {
  Thing.deleteOne({ _id: req.params.id })
    .then(() => res.status(200).json({ message: "Objet supprimé! !" }))
    .catch((error) => {
      console.error(`Supprimer ${error.message}`);
      return res.status(400).json({ error });
    });
};

exports.getOneThing = (req, res, next) => {
  Thing.findOne({ _id: req.params.id })
    .then((things) => res.status(200).json(things))
    .catch((error) => {
      console.error(`get id : ${error.message}`);
      return res.status(404).json({ error });
    });
};

exports.getAllStuff = (req, res, next) => {
  Thing.find()
    // things = Thing
    .then((things) => res.status(200).json(things))
    .catch((error) => {
      console.error(`Get, ${error.message}`);
      return res.status(400).json({ error });
    });
};

// exports { createThings, modifyThing, deleteThing, getOneThing, getAllStuff };