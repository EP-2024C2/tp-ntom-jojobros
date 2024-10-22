const { Producto, Fabricante, Componente } = require('../models'); // Importar los modelos

// Obtener todos los productos
exports.getAllProductos = async (req, res) => {
    try {
        const productos = await Producto.findAll();
        res.status(200).json(productos);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener los productos' });
    }
};

exports.getAllFabricantes = async (req, res) => {
    try {
        const fabricantes = await Fabricante.findAll();
        res.status(200).json(fabricantes);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener los fabricantes' });
    }
};

// Obtener un fabricante por ID
exports.getFabricanteById = async (req, res) => {
    try {
        const fabricante = await Fabricante.findByPk(req.params.id); // Buscar por el ID
        if (fabricante) {
            res.status(200).json(fabricante); // Si lo encuentra, lo devuelve en la respuesta
        } else {
            res.status(404).json({ error: 'Fabricante no encontrado' }); // Si no lo encuentra, envía un error 404
        }
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener el fabricante' }); // Error de servidor
    }
};

// Obtener un producto por ID
exports.getProductoById = async (req, res) => {
    try {
        const producto = await Producto.findByPk(req.params.id);
        if (producto) {
            res.status(200).json(producto);
        } else {
            res.status(404).json({ error: 'Producto no encontrado' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener el producto' });
    }
};

// Crear un nuevo producto
exports.createProducto = async (req, res) => {
    try {
        const nuevoProducto = await Producto.create(req.body);
        res.status(201).json(nuevoProducto);
    } catch (error) {
        res.status(400).json({ error: 'Error al crear el producto' });
    }
};

// Actualizar un producto existente
exports.updateProducto = async (req, res) => {
    try {
        const producto = await Producto.findByPk(req.params.id);
        if (producto) {
            await producto.update(req.body);
            res.status(200).json(producto);
        } else {
            res.status(404).json({ error: 'Producto no encontrado' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Error al actualizar el producto' });
    }
};

// Eliminar un producto
exports.deleteProducto = async (req, res) => {
    try {
        const producto = await Producto.findByPk(req.params.id);
        if (producto) {
            await producto.destroy();
            res.status(200).json({ message: 'Producto eliminado' });
        } else {
            res.status(404).json({ error: 'Producto no encontrado' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Error al eliminar el producto' });
    }
};
// Crear un nuevo fabricante
exports.createFabricante = async (req, res) => {
    try {
        const nuevoFabricante = await Fabricante.create(req.body);
        res.status(201).json(nuevoFabricante);
    } catch (error) {
        res.status(400).json({ error: 'Error al crear el fabricante' });
    }
};

// Actualizar un fabricante existente
exports.updateFabricante = async (req, res) => {
    try {
        const fabricante = await Fabricante.findByPk(req.params.id);
        if (fabricante) {
            await fabricante.update(req.body);
            res.status(200).json(fabricante);
        } else {
            res.status(404).json({ error: 'Fabricante no encontrado' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Error al actualizar el fabricante' });
    }
};

// Eliminar un fabricante
exports.deleteFabricante = async (req, res) => {
    try {
        const fabricante = await Fabricante.findByPk(req.params.id);
        if (fabricante) {
            await fabricante.destroy();
            res.status(200).json({ message: 'Fabricante eliminado' });
        } else {
            res.status(404).json({ error: 'Fabricante no encontrado' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Error al eliminar el fabricante' });
    }
};

// Obtener los productos de un fabricante
exports.getProductosForFabricante = async (req, res) => {
    try {
        const fabricante = await Fabricante.findByPk(req.params.id, {
            include: [Producto] // Incluir los productos relacionados
        });
        if (fabricante) {
            res.status(200).json(fabricante.Productos);
        } else {
            res.status(404).json({ error: 'Fabricante no encontrado' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener los productos del fabricante' });
    }
};

// Obtener los fabricantes de un producto
exports.getFabricantesForProducto = async (req, res) => {
    try {
        const producto = await Producto.findByPk(req.params.id, {
            include: [Fabricante] // Incluir los fabricantes relacionados
        });
        if (producto) {
            res.status(200).json(producto.Fabricantes);
        } else {
            res.status(404).json({ error: 'Producto no encontrado' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener los fabricantes' });
    }
};

// Agregar fabricantes a un producto
exports.addFabricantesToProducto = async (req, res) => {
    try {
        const producto = await Producto.findByPk(req.params.id);
        const fabricantes = await Fabricante.findAll({
            where: {
                id: req.body.fabricantesIds
            }
        });
        await producto.addFabricantes(fabricantes);
        res.status(201).json({ message: 'Fabricantes agregados al producto' });
    } catch (error) {
        res.status(400).json({ error: 'Error al agregar fabricantes' });
    }
};