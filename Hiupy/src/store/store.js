import {configureStore} from "@reduxjs/toolkit"
import { usuariosSlice } from "./slices"

//Estado global al cual se accede desde cualquier parte de la app
const store = configureStore({
    reducer: {
        //Se encarga del manejo del estado de los usuarios
        usuarios: usuariosSlice.reducer
    }
})

export default store