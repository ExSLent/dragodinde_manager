const {Dragodinde} = require('../src/db/sequelize')

module.exports = (app) => {
    app.get('/api/dragodindes', (req, res) => {
        Dragodinde.findAll()
            .then(pokemons => {
                res.json({message: "Liste des dragodindes", data: pokemons})
            })
    })
}
