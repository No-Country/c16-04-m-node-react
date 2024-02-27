export const RecipeItem = ({ receta }) => {
    return (
        <>
            <img
                className="w-[150px] h-[150px] rounded-2xl"
                src={receta.imagen}
            />
            <h2 className="font-semibold text-sm">{receta.nombre}</h2>
        </>
    );
};
