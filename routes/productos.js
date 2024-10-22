const express = require('express');
const router = express.Router();
const productoController = require('../controllers/productoController');
const validarProducto = require('../middleware/validarProducto');

// Ruta para crear un producto con validación de schema
router.post('/productos', validarProducto, productoController.createProducto);

// Ruta para actualizar un producto con validación de schema
router.put('/productos/:id', validarProducto, productoController.updateProducto);

// Ruta para obtener todos los productos
router.get('/', productoController.getAllProductos);

// Ruta para obtener un producto específico
router.get('/:id', productoController.getProductoById);

// Ruta para crear un nuevo producto
router.post('/', productoController.createProducto);

// Ruta para actualizar un producto existente
router.put('/:id', productoController.updateProducto);

// Ruta para eliminar un producto
router.delete('/:id', productoController.deleteProducto);

// Ruta para obtener los fabricantes de un producto
router.get('/:id/fabricantes', productoController.getFabricantesForProducto);

// Ruta para agregar fabricantes a un producto
router.post('/:id/fabricantes', productoController.addFabricantesToProducto);

// Ruta para obtener los componentes de un producto
router.get('/:id/componentes', productoController.getComponentesForProducto);

// Ruta para agregar componentes a un producto
router.post('/:id/componentes', productoController.addComponentesToProducto);

module.exports = router;
