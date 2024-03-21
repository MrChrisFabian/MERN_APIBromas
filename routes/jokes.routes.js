const express = require("express");

const { createNewJoke, deleteJokeById, getAllJokes, getOneJokeById, updateJoke } = require('../controllers/jokes.controller')

const UserRouter = express.Router();

//Cuando me piden el vacio ejecuto createNewUser
UserRouter.post("/", createNewJoke)
UserRouter.get("/", getAllJokes)
UserRouter.get("/:id", getOneJokeById)
UserRouter.put("/:id", updateJoke)
UserRouter.delete("/:id", deleteJokeById)
module.exports = UserRouter;