const { productoSchema } = require('../schemas/productoSchema');

// Middleware para validar los datos de un producto usando Joi
const validarProducto = (req, res, next) => {
    const { error } = productoSchema.validate(req.body);

    if (error) {
        return res.status(400).json({ error: error.details[0].message });
    }

    next(); // Si los datos son válidos, pasa al siguiente middleware/controlador
};

module.exports = validarProducto;