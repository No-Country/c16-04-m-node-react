// '../Router/shoppingListRouter.js'

import express from 'express';
import { getAllShoppingList, createShoppingList, updateShoppingList, deleteShoppingList } from '../controller/shoppingListController.js';
import { getProductInventory } from '../controller/productInventoryController.js';
const shoppingListRouter = express.Router();


shoppingListRouter.get('/shopping_list/:id', getProductInventory);
shoppingListRouter.post('/shopping_list', createShoppingList);
shoppingListRouter.put('/shopping_list/:id', updateShoppingList);
shoppingListRouter.delete('/shopping_list/:id', deleteShoppingList);

export default shoppingListRouter;