import { createSlice } from "@reduxjs/toolkit";
const initialState = [
    { id: 0, name: "Admin", rol:"admin" },
    { id: 1, name: "User 1", rol:"user" },
    { id: 2, name: "User 2", rol:"user" },
];
export const usuariosSlice = createSlice({
    name: "usuarios",
    initialState,
    reducers: {},
});

export const selectAllUsers = (state) => state.usuarios;

export const {} = usuariosSlice.actions;
