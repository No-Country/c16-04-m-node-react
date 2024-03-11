// '../controller/recipeController.js'
import ProductRecipes from "../models/productsRecipes.js";
import Recipe from "../models/recipes.js";
import Products from "../models/Productos.js";

// Obtener todas las recetas
export async function getAllRecipes(req, res) {
    try {
        const recipes = await Recipe.findAll();
        res.json(recipes);
    } catch (error) {
        console.error('Error al obtener recetas:', error);
        res.status(500).json({ message: 'Error al obtener recetas' });
    }
}

export async function getRecipe(req, res) {
    const {id} = req.params;

    try {
        
        const recipe = await Recipe.findByPk(id);
        const prodRecipe = await ProductRecipes.findAll({
            where: {id_recipe : id}
        })

        
        const productData = prodRecipe.map(product => ({ 
            id_products: product.id_product,
            quantity: product.quantity,
            unit: product.unit_measure,
            id_product_inventory: product.id_products_inventory}))
            console.log(productData)



            
            const prodRec = await Products.findAll({
                where: {id_product: productData.map(product => product.id_products)},
                
            })


            //agrega la cantidad a la respuesta
            const Quant = prodRec.map(product => {
                const matchingProduct = prodRecipe.find(data => data.id_product === product.id_product);
                return {
                    ...product.toJSON(),
                    quantity: matchingProduct ? matchingProduct.quantity : null // Agregar la cantidad del producto si está disponible, de lo contrario null
                };
            });


            //agrega las unidades a la respuesta
            const Unit = prodRec.map(product => {
                const matchingProduct = prodRecipe.find(data => data.id_product === product.id_product);
                return {
                    ...product.toJSON(),
                    Unit: matchingProduct ? matchingProduct.unit : null // Agregar la cantidad del producto si está disponible, de lo contrario null
                };
            });


            

            const response = {recipe, prodRec, Quant, Unit}






        res.json(response);
    } catch (error) {
        console.error('Error al obtener recetas:', error);
        res.status(500).json({ message: 'Error al obtener recetas' });
    }
}



