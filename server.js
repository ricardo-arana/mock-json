const express = require('express');
const cors = require('cors');


require('dotenv').config();
const app = express();

app.use(cors());

app.use(express.json());


app.use('/cambio-plan-movil', require('./routes/cambio-plan-movil'));

app.use('/migracion-pre-post', require('./routes/migracion-pre-post'));

app.get('/', (req, res) => {
    res.send('hola')
})

app.listen( process.env.PORT , () => {
    console.log('servidor corriendo en el puerto ' + process.env.PORT)
})
