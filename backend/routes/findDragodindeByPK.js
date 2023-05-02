const {Dragodinde} = require('../src/db/sequelize')

module.exports = (app) => {
    app.get('/api/dragodinde/:id', (req, res) => {
        Dragodinde.findByPk(req.params.id)
            .then(dragodinde => {
                res.json({message: "Dragodinde trouvée", data: dragodinde })
            })
    })
}