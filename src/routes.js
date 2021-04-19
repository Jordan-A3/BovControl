const express = require('express')
const AnimalController = require('./controllers/animalController')

const routes = express.Router()

routes.get('/animals', AnimalController.index)
routes.get('/animal/:id', AnimalController.show)
routes.post('/create', AnimalController.create)
routes.delete('/animal/:id', AnimalController.del)
routes.put('/animal/:id', AnimalController.update)

module.exports = routes