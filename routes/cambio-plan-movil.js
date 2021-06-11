const { Router } = require('express');
const fs = require('fs');
const router = Router();

router.get('/clarosites/ofertas/consultarofertasdisponibles', (req, res) => {
    
    let obj = JSON.parse(fs.readFileSync('mocks/consultarofertasdisponibles/cambio-plan-movil.json', 'utf8'));
    res.json(obj);
})

router.post('/clarosites/contratos/consultardatos', (req, res) => {
    
    let obj = JSON.parse(fs.readFileSync('mocks/contratos/consultar-datos/all.json', 'utf8'));
    res.json(obj);
})

router.post('/clarosites/contratos/consultaracuerdocontrato', (req, res) => {
    
    let obj = JSON.parse(fs.readFileSync('mocks/contratos/consultar-acuerdo-contrato/all.json', 'utf8'));
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
module.exports = router;