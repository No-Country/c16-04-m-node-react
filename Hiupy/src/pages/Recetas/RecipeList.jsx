import { RecipeItem } from "./RecipeItem";

export const RecipesList = ({ receta }) => {
    return (
        <div className="flex flex-col  items-center justify-center gap-2 p-2">
            <RecipeItem receta={receta} />
        </div>
    );
};
