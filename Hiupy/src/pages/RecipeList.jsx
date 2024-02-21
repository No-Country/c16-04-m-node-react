import { NavBar, Footer } from "../components"

export const RecipeList = () => {

    return(
        <>
            <NavBar />
                <div className="w-full h-screen box-border">
                    <div className="flex flex-col px-6 align-middle">
                        <h2 className="font-semibold text-base py-2">A continuación, productos a utilizar
                            en la receta:</h2>
                        <img src="/assets/images/arroz-chino.png" alt="Arroz chino" className=" max-w-96 object-contain"/>
                        <figcaption className=" flex justify-between max-w-96">
                            <h2 className=" font-semibold text-1xs w-2/3">Arroz Chino salteado con rodajas de cerdo</h2>
                            <p className="text-mini ">Por Gladys Olazar</p>
                        </figcaption>
                        <ul>
                            <h2>Ingredientes</h2>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                        </ul>

                    </div>
                </div>
            <Footer />
        </>
    )
        
}