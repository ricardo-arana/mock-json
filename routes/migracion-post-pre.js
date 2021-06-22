const { Router } = require('express');
const fs = require('fs');
const router = Router();
const clientRedis = require('../database/redis');

router.post('/clarosites/ordenes/validarreglasorden', (req, res) => {

    clientRedis.get("mpopeid", function(err, reply) {
        let obj = JSON.parse(fs.readFileSync('mocks/validarreglasorden/cambio-plan-movil.json', 'utf8'));
        obj.codigoRespuesta = reply;
        res.json(obj);
      });
    
});


router.post('/setreglaorden', (req, res) => {

    const value = req.body.value;
    clientRedis.set("mpopeid", value);
    res.json({ ok: true});
    
});

router.post('/clarosites/ofertas/consultarofertasdisponibles', (req, res) => {
    
    let obj = JSON.parse(fs.readFileSync('mocks/consultarofertasdisponibles/migracion-post-pre.json', 'utf8'));
    res.json(obj);
});


router.get('/clarosites/detalleplan/consultar/:plan', (req, res) => {
    
    let obj = JSON.parse(fs.readFileSync('mocks/detalle-plan/all.json', 'utf8'));
    res.json(obj);
})


router.get('/clarosites/detalleplan/consultar/:plan', (req, res) => {
    
    let obj = JSON.parse(fs.readFileSync('mocks/detalle-plan/all.json', 'utf8'));
    res.json(obj);
})

router.post('/clarosites/ordenes/procesarorden', (req, res) => {
    
    let obj = JSON.parse(fs.readFileSync('mocks/procesaroden/all.json', 'utf8'));
    res.json(obj);
})

router.get('/clarosites/beneficios/consultar/:plan', (req, res) => {
    
    let obj = JSON.parse(fs.readFileSync('mocks/beneficios/all.json', 'utf8'));
    res.json(obj);
})  

router.post('/clarosites/contratos/consultardatos', (req, res) => {
    
    let obj = JSON.parse(fs.readFileSync('mocks/contratos/consultar-datos/all.json', 'utf8'));
    res.json(obj);
})

router.get('/clarosites/motivos/obtenermotivos/:id', (req, res) => {
    
    let obj = JSON.parse(fs.readFileSync('mocks/obtenermotivos/all.json', 'utf8'));
    res.json(obj);
})
module.exports = router;