const JokesModel = require('../models/jokes.model');

module.exports = {
    createNewJoke: (req, res) => {
        JokesModel.create(req.body)
            .then(newlyCreatedJoke => res.json({ user: newlyCreatedJoke }))
            .catch(err => res.json({ message: "Something went wrong", error: err })
            );
    },
    getAllJokes: (req, res) => {
        JokesModel.find()
            .then((allJokes) => res.json({ users: allJokes }))
            .catch((err) =>
                res.json({ message: "Something went wrong", error: err })
            );
    },
    getOneJokeById: (req, res) => {
        JokesModel.findOne({ _id: req.params.id })
            .then((OneElement) => res.json({ user: OneElement }))
            .catch((err) => res.json({ message: "Algo no funciono correctamente", error: err }))
    },
    updateJoke: (req, res) => {
        JokesModel.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true }) // si no le ponemos el new:true te devuelve el viejo
            .then((UpdatedUser) => res.json({ user: UpdatedUser }))
            .catch((err) => res.json({ message: "Algo no funciono como se esperaba", error: err }))
    },
    deleteJokeById: (req, res) => {
        JokesModel.deleteOne({ _id: req.params.id })
            .then((result) => res.json({ result: result }))
            .catch((err) => res.json({ message: 'Algo no funciono correctamente :(', error: err }))
    }
}