'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  const Fabricante = sequelize.define('Fabricante', {
    nombre: {
      type: DataTypes.STRING,
      allowNull: false
    },
    direccion: DataTypes.STRING,
    numeroContacto: DataTypes.STRING,
    pathImgPerfil: DataTypes.STRING
  }, {});

  Fabricante.associate = function(models) {
    // Asociación 1 a N con Productos
    Fabricante.belongsToMany(models.Producto, {
      through: 'Producto_Fabricante',
      foreignKey: 'FabricanteId'
    });
  };

  return Fabricante;
};
