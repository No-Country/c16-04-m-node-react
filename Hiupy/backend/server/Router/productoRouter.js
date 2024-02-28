import express from 'express';
import { getProducts, createProduct, updateProduct, deleteProduct } from '../controller/productController.js';

const router = express.Router();

// Rutas para manejar las operaciones CRUD de productos
router.get('/products', getProducts);
router.post('/products', createProduct);
router.put('/products/:id', updateProduct);
router.delete('/products/:id', deleteProduct);

export default router;
