export const RecipeItem = ({ receta }) => {
    return (
        <>
            <img
                className="w-[150px] h-[150px] rounded-2xl"
                src={receta.img}
            />
            <h2 className="font-semibold text-sm">{receta.recipe_name}</h2>
            {/* <h2 className="font-semibold text-sm">{receta.description}</h2> */}
        </>
    );
};
