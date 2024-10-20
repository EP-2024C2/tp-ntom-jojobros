const { Componente, Producto } = require('../models');

// Crear un nuevo componente
exports.create = async (req, res) => {
  try {
    const nuevoComponente = await Componente.create(req.body);
    res.status(201).json(nuevoComponente);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Obtener todos los componentes
exports.getAll = async (req, res) => {
  try {
    const componentes = await Componente.findAll({
      include: { model: Producto, as: 'productos' }  // Incluimos los productos que usan este componente
    });
    res.status(200).json(componentes);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Obtener un componente por ID
exports.getById = async (req, res) => {
  try {
    const componente = await Componente.findByPk(req.params.id, {
      include: { model: Producto, as: 'productos' }  // Incluimos los productos que usan este componente
    });
    if (!componente) return res.status(404).json({ error: 'Componente no encontrado' });
    res.status(200).json(componente);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Actualizar un componente por ID
exports.update = async (req, res) => {
  try {
    const componente = await Componente.findByPk(req.params.id);
    if (!componente) return res.status(404).json({ error: 'Componente no encontrado' });
    await componente.update(req.body);
    res.status(200).json(componente);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Eliminar un componente por ID
exports.delete = async (req, res) => {
  try {
    const componente = await Componente.findByPk(req.params.id);
    if (!componente) return res.status(404).json({ error: 'Componente no encontrado' });
    await componente.destroy();
    res.status(200).json({ message: 'Componente eliminado' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
