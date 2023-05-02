const {Dragodinde} = require('../src/db/sequelize')

module.exports = (app) => {
    app.put('/api/dragodinde/:id', (req, res) => {
        const id = req.params.id
        Dragodinde.update(req.body, {
            where: {id: id}
        }).then(_ => {
            Dragodinde.findByPk(id).then(dragodinde => {
                res.json({message: `La dragodinde avec l'id ${dragodinde.id} à été modifié`, data: dragodinde})
            })
        })
    })
}