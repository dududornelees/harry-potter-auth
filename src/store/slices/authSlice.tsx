import { createSlice } from "@reduxjs/toolkit";

const initialState: AuthSlice = {
    user: sessionStorage.getItem("user-info") ? JSON.parse(sessionStorage.getItem("user-info") || "") : {},
    error: null
};

const slice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        handleLogin(state, { payload }) {
            const { user, password } = payload;

            if (user === "admin" && password === "admin") {
                state.user = { username: "admin", firstName: "Admin", authenticated: true };
                sessionStorage.setItem("user-info", JSON.stringify(state.user));
                state.error = null;
            } else {
                state.error = "Usuário e senha não existem.";
            }
        },
        handleLogout(state) {
            state.user = {};
            sessionStorage.removeItem("user-info");
        }
    }
});

export const { handleLogin, handleLogout } = slice.actions;
export default slice.reducer;
