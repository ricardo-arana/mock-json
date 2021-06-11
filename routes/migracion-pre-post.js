const { Router } = require('express');
const fs = require('fs');
const router = Router();

router.get('/clarosites/ofertas/consultarofertasdisponibles', (req, res) => {
    
    let obj = JSON.parse(fs.readFileSync('mocks/consultarofertasdisponibles/migracion-pre-post.json', 'utf8'));
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
module.exports = router;