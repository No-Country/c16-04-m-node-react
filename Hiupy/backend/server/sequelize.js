import {Sequelize} from 'sequelize';

//Conectando a la BD
const sequelize = new Sequelize('Hiupy', 'postgres', 'adidas10', {
    host: 'localhost',
    dialect: 'postgres'
})
//check de conexion
try {
    await sequelize.authenticate();
    console.log('Conexion establecida.');
  } catch (error) {
    console.error('No pudo conectarse:', error);
  }

  export default sequelize