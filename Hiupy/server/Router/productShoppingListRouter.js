// '../Router/productShoppingListRouter.js'

import express from 'express';
import { getProductShoppingList, createProductShop,   } from '../controller/productShoppingList.js';

const productShoppingListRouter = express.Router();

productShoppingListRouter.get('/products_shopping_lists/:id', getProductShoppingList);
productShoppingListRouter.post('/products_shopping_lists', createProductShop);
//productShoppingListRouter.put('/products_shopping_lists/:id', updateProductShoppingList);
//productShoppingListRouter.delete('/products_shopping_lists/:id', deleteProductShoppingList);

export default productShoppingListRouter;



