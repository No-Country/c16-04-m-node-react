import express from 'express';
import {getRecipes, recipeDetail} from '../controller/recipesController.js'

const recipesRouter = express.Router


recipesRouter.get('/', getRecipes);
recipesRouter.get('/detail/:id_recipes', recipeDetail)













export default recipesRouter