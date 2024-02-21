import { NavBar } from "../../components"
import { RecetasList } from "./RecetasList"

export const RecetasContainer = () => {
  return (
    <>
        <NavBar/>
        <div className="container p-8">
            <h1 className="text-left text-xl">Acá se contiene a RecetasList</h1>
            <RecetasList/>
        </div>
    </>
  )
}

