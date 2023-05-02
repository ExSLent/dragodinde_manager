const dragodindes = require('../src/db/dragodindes-json')
const {Dragodinde} = require('../src/db/sequelize')

module.exports = (app) => {
    app.delete('/api/dragodinde/:id', (req, res) => {
        Dragodinde.findByPk(req.params.id).then(pokemon => {
            const pokemonDeleted = pokemon
            Dragodinde.destroy({
                where: {id: req.params.id}
            }).then(_ => {
                res.json({message: `La dragodinde avec l'id ${pokemonDeleted.id} a été supprimé`, data: pokemonDeleted})
            })
        })
    })
}