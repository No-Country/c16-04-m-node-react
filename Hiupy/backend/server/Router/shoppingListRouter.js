// '../Router/shoppingListRouter.js'

import express from 'express';
import { getAllShoppingList, createShoppingList, updateShoppingList, deleteShoppingList } from '../controller/shoppingListController.js';

const shoppingListRouter = express.Router();

shoppingListRouter.get('/shopping_list', getAllShoppingList);
shoppingListRouter.post('/shopping_list', createShoppingList);
shoppingListRouter.put('/shopping_list/:id', updateShoppingList);
shoppingListRouter.delete('/shopping_list/:id', deleteShoppingList);

export default shoppingListRouter;