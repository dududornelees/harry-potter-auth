import { createSlice } from "@reduxjs/toolkit";

const user = localStorage.getItem("@harry-potter-auth/user") ? localStorage.getItem("@harry-potter-auth/user") : {};

const slice = createSlice({
    name: "auth",
    initialState: {
        loading: false,
        user: user,
        error: null
    },
    reducers: {
        handleLogin(state, { payload }) {
            console.log(payload);
        }
    }
});

export const { handleLogin } = slice.actions;
export default slice.reducer;
