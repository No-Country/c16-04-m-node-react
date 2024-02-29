// '../controller/productShoppingList.js'

import Products from "../models/Productos.js";
import ProductShoppingList from "../models/productShoppingList.js";
import ShoppingList from "../models/shoppingList.js";

// Obtener todos los productos en la lista de compras
export async function getAllProductShoppingList(req, res) {
    try {
        const productShoppingList = await ProductShoppingList.findAll();
        res.json(productShoppingList);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

// Crear un nuevo producto en la lista de compras
export async function createProductShoppingList(req, res) {
    try {
        const { id_product, id_list, quantity, unit_measure } = req.body;
        const product = await Products.findByPk(id_product);

        const shoppingList = await ShoppingList.findByPk(id_list);

        if (!product) {
            return res.status(404).json({ message: 'Producto no encontrado' });
        }

        if (!shoppingList) {
            return res.status(404).json({ message: 'Lista de compras no encontrada' });
        }

        const newProductShoppingList = await ProductShoppingList.create({ id_product, id_list, quantity, unit_measure });
        res.status(201).json(newProductShoppingList);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

// Actualizar un producto en la lista de compras
export async function updateProductShoppingList(req, res) {
    const { id } = req.params;
    try {
        await ProductShoppingList.update(req.body, { where: { id } });
        res.status(200).json({ message: 'Producto en la lista de compras actualizado' });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

// Eliminar un producto en la lista de compras
export async function deleteProductShoppingList(req, res) {
    const { id } = req.params;
    try {
        await ProductShoppingList.destroy({ where: { id } });
        res.status(200).json({ message: 'Producto en ;la lista de compras eliminado correctamente' });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}