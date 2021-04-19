const Animal = require('../models/animal.js')

module.exports = {
    async index(request, response){
        const animals = await Animal.find()

        return response.json(animals)
    },

    async create(request, response){
        const {name, type, weight, age} = request.body

        const animal = await Animal.create({
            name, 
            type, 
            weight, 
            age
        })
        return response.json(animal)
    },

    async show(request, response){
        const {id} = request.params

        const animal = await Animal.findById(id)

        return response.json(animal)
    },

    async del(request, response){
        const {id} = request.params

        await Animal.remove({_id: id})

        return response.json("ok")
    },

    async update(request, response){
        const {id} = request.params
        const {newAge, newWeight} = request.body

        const animal = await Animal.updateOne(
            {_id: id},
            {age: newAge, weight: newWeight}
        )

        return response.json(animal)
    }
}