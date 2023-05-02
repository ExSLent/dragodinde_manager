const {Dragodinde} = require('../src/db/sequelize')
const {Op} = require('sequelize')

module.exports = (app) => {
    app.get('/api/ready/dragofesse', (req, res) => {
        Dragodinde.findAll({
            where: {
                [Op.and]: [{
                    stat: {
                        [Op.gt] : 2000
                    },
                    amour: {
                        [Op.is] : false
                    },
                    feconde: {
                        [Op.is] : false
                    },
                    fecondee: {
                        [Op.is] : false
                    },
                }]
            }
        }).then(dragodindes => {
            dragodindeList = {}
            dragodindes.forEach(dragodinde => {
                dragodindeList["dragodinde " + dragodinde.id] = "Ready"
            })
            res.json({message: "Dragodinde(s) prête pour les dragofesses", data: dragodindeList})
        })
        })
    }