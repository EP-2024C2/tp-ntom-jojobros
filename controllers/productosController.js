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
// Obtener los componentes de un producto
exports.getComponentesForProducto = async (req, res) => {
    try {
        const producto = await Producto.findByPk(req.params.id, {
            include: [Componente] // Incluir los componentes relacionados
        });
        if (producto) {
            res.status(200).json(producto.Componentes);
        } else {
            res.status(404).json({ error: 'Producto no encontrado' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener los componentes' });
    }
};

// Agregar componentes a un producto
exports.addComponentesToProducto = async (req, res) => {
    try {
        const producto = await Producto.findByPk(req.params.id);
        const componentes = await Componente.findAll({
            where: {
                id: req.body.componentesIds
            }
        });
        await producto.addComponentes(componentes);
        res.status(201).json({ message: 'Componentes agregados al producto' });
    } catch (error) {
        res.status(400).json({ error: 'Error al agregar componentes' });
    }
};