import { NavBar, Footer } from "../../components";

export const RecipesCard = () => {
    return (
        <>
            <NavBar />
            <div className="w-full h-screen box-border">
                <div className="flex flex-col px-6 align-middle gap-y-3">
                    <h2 className="font-semibold text-base py-2">
                        A continuación, productos a utilizar en la receta:
                    </h2>
                    <img
                        src="/assets/images/arroz-chino.png"
                        alt="Arroz chino"
                        className=" max-w-96 object-contain"
                    />
                    <figcaption className=" flex justify-between max-w-96">
                        <h2 className=" font-semibold text-1xs w-2/3">
                            Arroz Chino salteado con rodajas de cerdo
                        </h2>
                        <p className="text-mini ">Por Gladys Olazar</p>
                    </figcaption>
                    <ul className=" text-xs space-y-3 max-w-96">
                        <h2 className=" font-semibold text-base underline">
                            Ingredientes
                        </h2>
                        <li className=" flex justify-between">
                            <label>1 taza de Arroz Blanco</label>
                            <input type="checkbox" />
                        </li>
                        <li className=" flex justify-between">
                            <label>1 cucharada de aceite vegeta</label>
                            <input type="checkbox" />
                        </li>
                        <li className=" flex justify-between">
                            <label>¼ taza de cerdo asado en rodaja</label>
                            <input type="checkbox" />
                        </li>
                        <li className=" flex justify-between">
                            <label>½ taza de apio, finamente rebanado</label>
                            <input type="checkbox" />
                        </li>
                        <li className=" flex justify-between">
                            <label>
                                ⅓ taza de cebolla verde y sus hojas, cortado en
                                rodajas
                            </label>
                            <input type="checkbox" />
                        </li>
                        <li className=" flex justify-between">
                            <label>1 huevo batido</label>
                            <input type="checkbox" />
                        </li>
                        <li className=" flex justify-between">
                            <label>pimienta negra</label>
                            <input type="checkbox" />
                        </li>
                        <li className=" flex justify-between">
                            <label>
                                2 cucharadas de salsa de soya baja en sodio
                            </label>
                            <input type="checkbox" />
                        </li>
                    </ul>
                </div>
            </div>
            <Footer />
        </>
    );
};
