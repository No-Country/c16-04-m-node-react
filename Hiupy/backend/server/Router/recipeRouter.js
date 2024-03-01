import express from 'express';
import { getAllRecipes, createRecipe, updateRecipe, deleteRecipe, getRecipe } from '../controller/recipeController.js';

const recipeRouter = express.Router();

recipeRouter.get('/recipes/', getAllRecipes);
recipeRouter.get('/recipes/:id', getRecipe)
recipeRouter.post('/recipes/', createRecipe);
recipeRouter.put('/recipes/:id', updateRecipe);
recipeRouter.delete('/recipes/:id', deleteRecipe);

export default recipeRouter;