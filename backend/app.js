//IMPORT EXPRESS
const express = require('express')

//IMPORT SEQUEZLIZE
const sequelize = require('./src/db/sequelize.js')

//IMPORT MIDDLEWARES
const bodyParser = require('body-parser')
const morgan = require('morgan')
const cors = require('cors')

// OTHERS IMPORTS
const help = require('./help.js')


//INITIALIZE EXPRESS
const app = express()
const port = 3000

//DB
sequelize.authenticateDB()
sequelize.initDB()

//MIDDLEWARES
app.options('*', cors())
app
    .use(bodyParser.json())
    .use(morgan('combined'))
    .use((req, res, next) => {
        res.setHeader('Access-Control-Allow-Origin','*');
        res.setHeader('Access-Control-Allow-Methods','GET,POST,PUT,PATCH,DELETE,OPTIONS');
        res.setHeader('Access-Control-Allow-Methods','Content-Type','Authorization');
        next(); 
    })


//ROUTES
require('./routes/addDragodinde.js')(app)
require('./routes/updateDragodinde.js')(app)
require('./routes/deleteDragodinde.js')(app)

require('./routes/findAllDragodindes.js')(app)
require('./routes/findDragodindeByPK.js')(app)

require('./routes/findDragodindeAbreuvoire.js')(app)
require('./routes/findDragodindeFoudroyeur.js')(app)
require('./routes/findDragodindeDragofesse.js')(app)
require('./routes/findDragodindeBaffeur.js')(app)
require('./routes/findDragodindeCaresseur.js')(app)

app.listen(port, () => console.log(`Application running on http://localhost:${port}`))