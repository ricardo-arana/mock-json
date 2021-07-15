console.log('request: ');
const { Router } = require('express');
const fs = require('fs');
const { cambioPlanMovil, consultarProductosDisponibles, procesarOrden } = require('../controllers/suspension-temporal');
const router = Router();

const clientRedis = require('../database/redis');

router.post('/clarosites/ordenes/validarreglasorden', (req, res) => {
    const code = clientRedis.get('stid', function (err, reply) {
        let obj = JSON.parse(fs.readFileSync('mocks/validarreglasorden/all.json', 'utf8'));
        obj.codigoRespuesta = reply;
        res.json(obj);
    });
});

// router.get('/clarosites/ordenes/validarreglasorden', cambioPlanMovil);
// router.post('/clarosites/ordenes/validarreglasorden', cambioPlanMovil);

router.post('/setreglaorden', (req, res) => {
    const value = req.body.value;
    clientRedis.set('stid', value);
    res.json({ ok: true });
});


router.post('/clarosites/productos/consultarproductosdisponibles', (req, res) =>{

    let obj = JSON.parse(fs.readFileSync('mocks/consultarproductosdisponibles/all.json', 'utf8'));
    res.json(obj);
});

router.post('/clarosites/ordenes/procesarorden', (req, res ) =>{
    let obj = JSON.parse(fs.readFileSync('mocks/procesaroden/suspension-temporal.json', 'utf8'));
    res.json(obj);
});

module.exports = router;
