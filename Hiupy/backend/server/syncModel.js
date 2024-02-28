
// syncModel.js
import products_inventory from './models/products_inventory.js';
import inventory from './models/inventory.js';
import User from './models/User.js';
import Products from './models/Productos.js';
import sequelize from './sequelize.js'; // Importa la instancia de Sequelize

async function syncModel() {
    const t = await sequelize.transaction();
    try {
        await sequelize.sync({ transaction: t });
        await t.commit();
        console.log("Todos los modelos se sincronizaron correctamente.");
    } catch (error) {
        await t.rollback();
        console.error("Error al sincronizar modelos:", error);
    }
}

syncModel();