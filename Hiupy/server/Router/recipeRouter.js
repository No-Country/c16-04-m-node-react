import express from 'express';
import { getAllRecipes, getRecipe } from '../controller/recipeController.js';

const recipeRouter = express.Router();

recipeRouter.get('/recipes/', getAllRecipes);
recipeRouter.get('/recipes/:id', getRecipe)


export default recipeRouter;