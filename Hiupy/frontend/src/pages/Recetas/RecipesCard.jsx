import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { NavBar, Footer } from "../../components";
import RecipesContext from "../../context/Recipes/RecipesContext";
import RecipeIngredientsContext from "../../context/Recipes/RecipeIngredientsContext";
import InventoryContext from "../../context/Inventory/InventoryContext";
import ShoppingContext from "../../context/Shopping/ShoppingContext";
import { AddAll } from "../../components/Buttons/AddAll";

export const RecipesCard = () => {
    const { id_recipe } = useParams();

    const { addAllOnClick } = useContext(ShoppingContext);

    const {
        data: recipeIngredients,
        loading,
        error,
        getId,
    } = useContext(RecipeIngredientsContext);

    const { data: recipesData } = useContext(RecipesContext);
    const { updatedData, getProductByName } = useContext(InventoryContext);
    // console.log(recipeIngredients)
    // console.log("esto es id_recipe en RecipesCard", id_recipe);
    // console.log("consoleLog en recipeCard", recipeIngredients.productosRecipe);

    //Llamo a getId pasandole id_recipe, el cual actualiza el estado
    useEffect(() => {
        getId(id_recipe);
    }, [getId, id_recipe]);

    // console.log("inventoryData", updatedData);
    //Busco la receta que coincida con el id que me traigo de la url con useParams
    const selectedRecipe = recipesData.find(
        (recipe) => recipe.id_recipe === parseInt(id_recipe)
    );

    const newRecipeIngredients = () => {
        let toAddList;
        if (recipeIngredients && recipeIngredients.productosRecipe !== null) {
            toAddList = recipeIngredients.productosRecipe
                .map((ingredient) => {
                    const productName = ingredient.product_name
                        .toLowerCase()
                        .trim();
                    const filter = getProductByName(productName);
                    if (!filter) {
                        // console.log("Ingredient en newRecipeIngredients",ingredient)
                        return ingredient;
                    } else {
                        return null;
                    }
                })
                .filter((ingredient) => ingredient !== null);
        }
        return toAddList;
    };

    const handleAddAll = async () => {
        try {
            const newItems = await newRecipeIngredients();
            if (newItems) {
                // console.log("entra en try", newItems)
                addAllOnClick(newItems);
            }
        } catch (error) {
            console.error("Error", error);
        }
    };

    // console.log("toAddList?", newRecipeIngredients())

    return (
        <>
            <NavBar />
            <div className="w-full box-border">
                <div>
                    <h2 className="font-semibold w-11/12 mx-auto text-base py-2">
                        A continuación, productos a utilizar en la receta:
                    </h2>
                    {selectedRecipe && (
                        <div
                            className="
                        flex flex-col justify-center items-center mx-auto w-11/12 
                        md:flex-row md:justify-evenly md:flex-wrap md:items-start py-6
                        lg:flex-row lg:flex-wrap lg:gap-6"
                        >
                            <figure className="w-full md:max-w-[150px] lg:max-w-[150px]">
                                <img
                                    src={selectedRecipe.img_url}
                                    alt={selectedRecipe.recipe_name}
                                    className="w-full"
                                />
                                <figcaption className="flex flex-col justify-between max-w-96">
                                    <h2 className="font-semibold text-1xs">
                                        {selectedRecipe.recipe_name}
                                    </h2>
                                    <p className="text-mini">
                                        Por Gladys Olazar
                                    </p>
                                </figcaption>
                            </figure>

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
                                                          <p className="w-8/12">
                                                              {item.quantity}
                                                          </p>
                                                          <p className="w-8/12">
                                                              {item.unit}
                                                          </p>

                                                          {/* Agrega item faltante a lista de compras */}
                                                          {/* {!byName && (
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
                                                          )} */}

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
                        </div>
                    )}
                    <div className="w-11/12 mx-auto lg:w-2/12 lg:absolute bottom-44 right-40">
                        <AddAll onClick={handleAddAll} />
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};
