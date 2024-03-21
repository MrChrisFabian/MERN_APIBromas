const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator")

const JokesSchema = new mongoose.Schema({
    setup: {
        type: String,
        required: true,
        trim: true,
        unique: true,
        minlength: [10, "Por Favor ingrese la preparación completa del chiste..."]
    },
    punchline: {
        type: String,
        required: true,
        trim: true,
        unique: true,
        minlength: [3, "Por Favor Termine su chiste.."]
    }
}, {
    timestamps: true,
});

JokesSchema.plugin(uniqueValidator)
const JokesModel = mongoose.model('Joke', JokesSchema);

module.exports = JokesModel;