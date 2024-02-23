import express from 'express';
import { getProducts, createProduct, updateProduct, deleteProduct } from '../controller/productController.js';

const router = express.Router();

// Rutas para manejar las operaciones CRUD de productos
router.get('/productos', getProducts);
router.post('/productos', createProduct);
router.put('/productos/:id', updateProduct);
router.delete('/productos/:id', deleteProduct);

export default router;
