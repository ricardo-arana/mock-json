const { Router } = require('express');
const fs = require('fs');
const router = Router();

router.get('/clarosites/ofertas/consultarofertasdisponibles', (req, res) => {
    
    let obj = JSON.parse(fs.readFileSync('mocks/consultarofertasdisponibles/cambio-plan-fija.json', 'utf8'));
    res.json(obj);
})


router.get('/clarosites/detalleplan/consultar/:plan', (req, res) => {
    
    let obj = JSON.parse(fs.readFileSync('mocks/detalle-plan/all.json', 'utf8'));
    res.json(obj);
})

router.get('/clarosites/motivos/obtenermotivos/:id', (req, res) => {
    
    let obj = JSON.parse(fs.readFileSync('mocks/obtenermotivos/all.json', 'utf8'));
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
router.get('/clarosites/citaciones/consultardatoscita', (req, res) => {
    
    let obj = JSON.parse(fs.readFileSync('mocks/consultardatoscita/cambio-plan-fija.json', 'utf8'));
    res.json(obj);
})  
module.exports = router;