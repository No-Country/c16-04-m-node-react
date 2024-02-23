import Productos from '../models/Productos.js';

// Controlador para manejar las operaciones CRUD de productos

// Obtener todos los productos
async function getProducts(req, res) {
    try {
        const products = await Productos.findAll();
        res.json(products);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

//Crear un nuevo producto
async function createProduct(req, res) {
    if (!req.body) {
        console.log(req.body)
        return res.status(400).json({ message: 'No se proporcionaron datos en el cuerpo de la solicitud.' });
    }
    try {
        const { Nombre, Categoria } = req.body;
        const newProduct = await Productos.create({ Nombre, Categoria });
        res.status(201).json(newProduct);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

//async function createProduct(req, res) {
//    try {
//        const newProduct = await Productos.create({ Nombre: 'Producto de ejemplo', Categoria: 'Categoría de ejemplo' });
//        res.status(201).json(newProduct);
//    } catch (error) {
//        res.status(400).json({ message: error.message });
//    }
//}




// Actualizar un producto existente
async function updateProduct(req, res) {
    const { id } = req.params;
    try {
        await Productos.update(req.body, {
            where: { id }
        });
        res.status(200).json({ message: 'Producto actualizado correctamente.' });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

// Eliminar un producto
async function deleteProduct(req, res) {
    const { id } = req.params;
    try {
        await Productos.destroy({
            where: { id }
        });
        res.status(200).json({ message: 'Producto eliminado correctamente.' });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

export { getProducts, createProduct, updateProduct, deleteProduct };
