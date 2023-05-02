const {Dragodinde} = require('../src/db/sequelize')

module.exports = (app) => {
    app.post('/api/dragodinde/:color', (req, res) => {
        body = req.body
        body["couleur"] = req.params.color
        console.log(body.color)
        Dragodinde.create(body)
            .then(dragodinde => {
                res.json({message: `Dragodinde a été créé avec l'id ${dragodinde.id}`, data: dragodinde})
            })
    })
}