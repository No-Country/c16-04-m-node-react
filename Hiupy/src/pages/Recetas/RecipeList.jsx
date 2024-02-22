import { RecipeItem } from "./RecipeItem";

export const RecipesList = ({ receta }) => {
    return (
        <div>
            <RecipeItem receta={receta} />
        </div>
    );
};
