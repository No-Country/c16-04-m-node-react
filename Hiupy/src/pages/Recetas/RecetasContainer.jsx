import { NavBar } from "../../components"
import { RecetasList } from "./RecetasList"

export const RecetasContainer = () => {
  return (
    <>
        <NavBar/>
        <div className="container p-8">
            <h2 className="text-left text-[16px] font-semibold">Estas son las recetas sugeridas con los ingredientes que tenés en casa</h2>
            <RecetasList/>
        </div>
        {/* FOOTER ACA */}
    </>
  )
}

