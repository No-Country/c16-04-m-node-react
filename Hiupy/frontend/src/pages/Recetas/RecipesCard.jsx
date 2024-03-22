import { useContext, useEffect } from "react";
import { NavLink, useParams } from "react-router-dom";
import { NavBar, Footer } from "../../components";
import RecipesContext from "../../context/Recipes/RecipesContext";
import RecipeIngredientsContext from "../../context/Recipes/RecipeIngredientsContext";
import InventoryContext from "../../context/Inventory/InventoryContext";
import ShoppingContext from "../../context/Shopping/ShoppingContext";

export const RecipesCard = () => {
    const { id_recipe } = useParams();

    const { addOnClick } = useContext(ShoppingContext);

    const {
        data: recipeIngredients,
        loading,
        error,
        getId,
    } = useContext(RecipeIngredientsContext);

    const { data: recipesData } = useContext(RecipesContext);
    const { updatedData, getProductByName } = useContext(InventoryContext);
    // console.log(recipeIngredients)
    // console.log(id_recipe);
    // console.log("consoleLog en recipeCard", recipeIngredients);

    //Llamo a getId pasandole id_recipe, el cual actualiza el estado
    useEffect(() => {
        getId(id_recipe);
    }, [id_recipe]);

    // console.log("inventoryData", updatedData);
    //Busco la receta que coincida con el id que me traigo de la url con useParams
    const selectedRecipe = recipesData.find(
        (recipe) => recipe.id_recipe === parseInt(id_recipe)
    );

    const toFilter = recipeIngredients
    console.log(toFilter.productosRecipe)
    
    // //Metodo que se encarga de filtrar el total de ingredientes que no se encuentren en inventario
    // const toAddIngredients = toFilter.productosRecipe.map((ingredient) => {
    //     const productName = ingredient.product_name.toLowerCase().trim();
    //     const filter = getProductByName(productName);
    //     if (!filter) {
    //        return ingredient;
    //     } else {
    //         return null
    //     }
    // }).filter((ingredient)=> ingredient !== null)

    // console.log("toAddIngredients", toAddIngredients)
        

    return (
        <>
            <NavBar />
            <div className="w-full box-border">
                <div className="flex flex-col px-6 align-middle gap-y-3">
                    <h2 className="font-semibold text-base py-2">
                        A continuación, productos a utilizar en la receta:
                    </h2>
                    {selectedRecipe && (
                        <>
                            <img
                                src={selectedRecipe.img_url}
                                alt={selectedRecipe.recipe_name}
                                className="max-w-96 object-contain"
                            />
                            <figcaption className="flex justify-between max-w-96">
                                <h2 className="font-semibold text-1xs w-2/3">
                                    {selectedRecipe.recipe_name}
                                </h2>
                                <p className="text-mini">Por Gladys Olazar</p>
                            </figcaption>
                            <ul className="text-xs space-y-3 max-w-96">
                                <h2 className="font-semibold text-base underline">
                                    Preparación
                                </h2>
                                <legend>{selectedRecipe.instruction}</legend>
                                <h3 className="font-semibold text-base underline">
                                    Ingredientes
                                </h3>
                                <div className="flex flex-col gap-5">
                                    {!loading && !error && recipeIngredients
                                        ? recipeIngredients.productosRecipe.map(
                                              (item) => {
                                                  const byName =
                                                      getProductByName(
                                                          item.product_name
                                                              .toLowerCase()
                                                              .trim()
                                                      );
                                                  return (
                                                      <li
                                                          className="flex justify-between items-center"
                                                          key={item.id_product}
                                                      >
                                                          <p className="w-8/12">
                                                              {
                                                                  item.product_name
                                                              }
                                                          </p>
                                                          {/* Agrega item faltante a lista de compras */}
                                                          {!byName && (
                                                              <button
                                                                  className="
                                                                  text-[16px] font-bold w-6 h-6 rounded-full border text-botones border-botones"
                                                                  onClick={() => {
                                                                      addOnClick(
                                                                          item.product_name
                                                                      );
                                                                  }}
                                                              >
                                                                  +
                                                              </button>
                                                          )}

                                                          <input
                                                              type="checkbox"
                                                              readOnly={true}
                                                              className="checked:bg-green-400 rounded-xl"
                                                              checked={byName}
                                                              disabled={!byName}
                                                          />
                                                      </li>
                                                  );
                                              }
                                          )
                                        : error && (
                                              <>
                                                  <h2>
                                                      Lo sentimos, parece que ha
                                                      ocurrido un error
                                                  </h2>
                                              </>
                                          )}
                                </div>

                                {/* {!loading && !error && recipeIngredients
                                    ? recipeIngredients.Quant.map((item) => {
                                        {console.log(item);}
                                        
                                      })
                                    : error && (
                                          <>
                                              <h2>
                                                  Lo sentimos, parece que ha
                                                  ocurrido un error
                                              </h2>
                                          </>
                                      )} */}
                            </ul>

                            <NavLink
                                to="/Shopping"
                                className="item-center text-center mt-8"
                            >
                                {/* Agrega todos los items faltantes a lista de compras */}
                                <button
                                    className="bg-e2a748 px-2 py-4 rounded-xl w-2/3 text-white"
                                    onClick
                                >
                                    Lista de compras
                                </button>
                            </NavLink>
                        </>
                    )}
                </div>
            </div>
            <Footer />
        </>
    );
};
