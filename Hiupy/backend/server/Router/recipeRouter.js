import express from 'express';
import { getAllRecipes, createRecipe, updateRecipe, deleteRecipe } from '../controller/recipeController.js';

const recipeRouter = express.Router();

recipeRouter.get('/recipes/', getAllRecipes);
recipeRouter.post('/recipes/', createRecipe);
recipeRouter.put('/recipes/:id', updateRecipe);
recipeRouter.delete('/recipes/:id', deleteRecipe);

export default recipeRouter;