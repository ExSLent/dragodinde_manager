const {Dragodinde} = require('../src/db/sequelize')
const {Op} = require('sequelize')

module.exports = (app) => {
    app.get('/api/ready/baffeur', (req, res) => {
        Dragodinde.findAll({
            where : {
                [Op.or] : [{
                    stat: { [Op.gt]: 2000 },
                    amour: true,
                    feconde: false,
                    fecondee: false,
                  },
                  {
                    stat: { [Op.lt]: 2000, [Op.gt]: -2000 },
                    maturite: true,
                    amour: true,
                    feconde: false,
                    fecondee: false,
                  }]
            }
        }).then(dragodindes => {
            dragodindeList = {}
            dragodindes.forEach(dragodinde => {
                dragodindeList["dragodinde " + dragodinde.id] = "Ready"
            })
            res.json({message: "Dragodinde(s) prête pour le baffeur", data: dragodindeList})
        })
    })
}

//BAFFEUR
//((STAT > 2000) AND (AMOUR = true)) OR (((STAT < 2000) AND (STAT > -2000)) AND ((MATURIE = true)))

//CARESSEUR
//((STAT < -2000) AND (ENDURANCE = true)) OR (((STAT < 2000) AND (STAT > -2000)) AND ((MATURIE = true)))