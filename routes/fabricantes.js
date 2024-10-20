const express = require('express');
const router = express.Router();
const fabricantesController = require('../controllers/fabricantesController');

// Ruta para obtener todos los fabricantes
router.get('/', fabricantesController.getAllFabricantes);

// Ruta para obtener un fabricante específico
router.get('/:id', fabricantesController.getFabricanteById);

// Ruta para crear un nuevo fabricante
router.post('/', fabricantesController.createFabricante);

// Ruta para actualizar un fabricante existente
router.put('/:id', fabricantesController.updateFabricante);

// Ruta para eliminar un fabricante
router.delete('/:id', fabricantesController.deleteFabricante);

// Ruta para obtener los productos de un fabricante
router.get('/:id/productos', fabricantesController.getProductosForFabricante);

module.exports = router;
