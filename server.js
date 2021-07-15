const express = require('express');
const cors = require('cors');


require('dotenv').config();
const app = express();

app.use(cors());

app.use(express.json());


app.use('/cambio-plan-movil', require('./routes/cambio-plan-movil'));

app.use('/cambio-plan-fija', require('./routes/cambio-plan-fija'));

app.use('/migracion-pre-post', require('./routes/migracion-pre-post'));
app.use('/migracion-post-pre', require('./routes/migracion-post-pre'));
app.use('/baja-post', require('./routes/baja-post'));
app.use('/suspension-temporal', require('./routes/suspension-temporal'));


app.get('/', (req, res) => {
    res.send('hola')
})

app.listen( process.env.PORT , () => {
    console.log('servidor corriendo en el puerto ' + process.env.PORT)
})
