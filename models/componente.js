'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  const Componente = sequelize.define('Componente', {
    nombre: {
      type: DataTypes.STRING,
      allowNull: false
    },
    descripcion: DataTypes.TEXT
  }, {});

  Componente.associate = function(models) {
    // Asociación N a M con Productos
    Componente.belongsToMany(models.Producto, {
      through: 'Producto_Componente',
      foreignKey: 'ComponenteId'
    });
  };

  return Componente;
};
