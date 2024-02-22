export const RecipeItem = ({ receta }) => {
    return (
        <>
            <h2>{receta.nombre}</h2>
            <p>{receta.descripcion}</p>
        </>
    );
};
