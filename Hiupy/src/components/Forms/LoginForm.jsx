export const LoginForm = () => {
    return (
        <>
            <section>
                <form className="flex flex-col gap-1 my-12 ">
                    <legend className="text-sm">Correo Electrónico</legend>
                    <input
                        type="email"
                        placeholder="Ingresá tu correo electrónico"
                        className="
                    border-2 
                    border-light-grey 
                    rounded-lg
                    p-2
                    w-full
                    placeholder:text-xs
                    mb-6"
                    ></input>

                    <legend className="text-sm">Contraseña</legend>
                    <input
                        type="password"
                        placeholder="Ingresá tu correo electrónico"
                        className="
                    border-2 
                    border-light-grey 
                    rounded-lg
                    p-2
                    w-full
                    placeholder:text-xs
                    mb-6"
                    ></input>

                    <legend className="
                    text-xs
                    text-amarillo-custom
                    mb-6">
                        ¿Olvidaste la contraseña?
                    </legend>
                    <button
                    className="
                    w-full
                    p-2
                    border-none
                    rounded-lg
                    bg-botones
                    text-white
                    font-semibold">Ingresá</button>
                </form>
            </section>
        </>
    );
};
