import {configureStore} from "@reduxjs/toolkit"
import { usuariosSlice } from "./slices"

const store = configureStore({
    reducer: {
        usuarios: usuariosSlice.reducer
    }
})

export default store