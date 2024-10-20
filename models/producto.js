'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  const Producto = sequelize.define('Producto', {
    nombre: {
      type: DataTypes.STRING,
      allowNull: false
    },
    descripcion: DataTypes.TEXT,
    precio: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    pathImg: DataTypes.STRING
  }, {});

  Producto.associate = function(models) {
    // Asociación 1 a N con Fabricantes
    Producto.belongsToMany(models.Fabricante, {
      through: 'Producto_Fabricante',
      foreignKey: 'ProductoId'
    });

    // Asociación 1 a N con Componentes
    Producto.belongsToMany(models.Componente, {
      through: 'Producto_Componente',
      foreignKey: 'ProductoId'
    });
  };

  return Producto;
};