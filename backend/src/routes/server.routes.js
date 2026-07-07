const express = require('express');
const router = express.Router();
const path = require('path');

const gasto = require('../controllers/gastos.controllers');
const usuario = require('../controllers/usuarios.controllers');

router.get('/api', (req, res) => {
    res.send('Bienvenido al Backend de Cálculo de Gastos');
});

router.get('/api/about', (req, res) => {
    res.send('<h1>Acerca de nosotros</h1>');
});

router.get('/api/contactos', (req, res) => {
    res.sendFile('contacto.avif', {
        root: path.join(__dirname, '../../')
    });
});

router.get('/api/gastos', gasto.getGastos); 
router.post('/api/gastos', gasto.addGasto); 
router.get('/api/gastos/:id', gasto.getGasto);
router.put('/api/gastos/:id', gasto.editGasto);
router.delete('/api/gastos/:id', gasto.deleteGasto);

router.get('/api/usuarios', usuario.getUsuarios); 
router.post('/api/usuarios', usuario.addUsuario); 

router.post('/api/calculos', (req, res) => {
    console.log(req.body);
    res.send("Cálculo impuesto a la renta");
});

module.exports = router;