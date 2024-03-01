import products_inventory from '../models/products_inventory.js'
//import inventory from '../models/inventory'
//import products from '../models/Productos'


export async function getProductInventory(req, res){

    const {id} = req.params

    try {
        const productsInventory = await products_inventory.findAll({
            where: { id_inventory: id}
        });
        res.json(productsInventory);
        console.log(productsInventory)
    } catch (error) {
        console.error('Error al obtener los productos:', error);
        res.status(500).json({ message: error.message });
    }
}




