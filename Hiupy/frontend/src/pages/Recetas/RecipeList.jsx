/* eslint-disable react/prop-types */
import { RecipeItem } from "./RecipeItem";

export const RecipesList = ({ receta }) => {
    // console.log(receta);
    return (
        <div className="flex flex-col items-left md:items-center justify-start md:justify-center gap-2 p-2">
            <RecipeItem receta={receta} />
        </div>
    );
};
