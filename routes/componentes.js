const express = require('express');
const router = express.Router();
const componentesController = require('../controllers/componentesController');

// Ruta para obtener todos los componentes
router.get('/', componentesController.getAllComponentes);

// Ruta para obtener un componente específico
router.get('/:id', componentesController.getComponenteById);

// Ruta para crear un nuevo componente
router.post('/', componentesController.createComponente);

// Ruta para actualizar un componente existente
router.put('/:id', componentesController.updateComponente);

// Ruta para eliminar un componente
router.delete('/:id', componentesController.deleteComponente);

// Ruta para obtener los productos de un componente
router.get('/:id/productos', componentesController.getProductosForComponente);

module.exports = router;
