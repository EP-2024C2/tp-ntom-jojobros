const express = require('express');
const app = express();
const { sequelize } = require('./models');
const productosRoutes = require('./routes/productos');
const fabricantesRoutes = require('./routes/fabricantes');
const componentesRoutes = require('./routes/componentes');
require('dotenv').config();

app.use(express.json()); // Middleware para procesar JSON en las solicitudes

// Rutas principales
app.use('/productos', productosRoutes);
app.use('/fabricantes', fabricantesRoutes);
app.use('/componentes', componentesRoutes);

// Puerto de escucha
const PORT = process.env.PORT || 3001;

// Sincronización de los modelos con la base de datos
sequelize.sync({ force: false })  // Cambia a 'false' si no quieres recrear las tablas cada vez
  .then(() => {
    console.log('Base de datos sincronizada');
    // Inicia el servidor después de sincronizar la base de datos
    app.listen(PORT, () => {
      console.log(`Servidor corriendo en el puerto ${PORT}`);
    });
  })
  .catch((error) => {
    console.error('Error al sincronizar la base de datos:', error);
  });
