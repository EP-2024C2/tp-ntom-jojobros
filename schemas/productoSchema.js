const Joi = require('joi');

// Definir el esquema para la creación de un producto
const productoSchema = Joi.object({
    nombre: Joi.string().min(3).max(100).required(),
    descripcion: Joi.string().max(255).optional(),
    precio: Joi.number().positive().required(),
    stock: Joi.number().integer().min(0).optional(),
    fabricanteId: Joi.number().integer().optional(),
});

module.exports = {
    productoSchema
};