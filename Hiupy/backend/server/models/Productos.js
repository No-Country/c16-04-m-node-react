import sequelize from '../sequelize.js';
import {DataTypes} from 'sequelize'
//const Sequelize = new sequelize();

const Productos = sequelize.define('Productos', {
  // Modelo

  Nombre: {
    type: DataTypes.STRING,
    allowNull: false
  },
 Categoria: {
    type: DataTypes.STRING
    
  }
}, )

// logeo del modelo
//console.log(User === sequelize.models.User); 

export default Productos;