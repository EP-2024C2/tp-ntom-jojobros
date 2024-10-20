const express = require('express');
const router = express.Router();
const productosController = require('../controllers/productosController');

// Ruta para obtener todos los productos
router.get('/', productosController.getAllProductos);

// Ruta para obtener un producto específico
router.get('/:id', productosController.getProductoById);

// Ruta para crear un nuevo producto
router.post('/', productosController.createProducto);

// Ruta para actualizar un producto existente
router.put('/:id', productosController.updateProducto);

// Ruta para eliminar un producto
router.delete('/:id', productosController.deleteProducto);

// Ruta para obtener los fabricantes de un producto
router.get('/:id/fabricantes', productosController.getFabricantesForProducto);

// Ruta para agregar fabricantes a un producto
router.post('/:id/fabricantes', productosController.addFabricantesToProducto);

// Ruta para obtener los componentes de un producto
router.get('/:id/componentes', productosController.getComponentesForProducto);

// Ruta para agregar componentes a un producto
router.post('/:id/componentes', productosController.addComponentesToProducto);

module.exports = router;
