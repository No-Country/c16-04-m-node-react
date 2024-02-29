//import model











async function getRecipes(req, res) {
    try {
        const recipes = await recipes.findAll();
        res.json(recipes);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};



async function recipeDetail(req,res){

    const { id_recipe } = req.params;
    try{
        const detailRecipe = await recipes.findByPK(id_recipe)
        res.json(detailRecipe);
    
    }catch(error){
        reres.status(500).json({ message: error.message });s
    }


}

export {getRecipes, recipeDetail}