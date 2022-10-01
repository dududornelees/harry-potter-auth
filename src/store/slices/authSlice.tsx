import { createSlice } from "@reduxjs/toolkit";

const user = localStorage.getItem("@harry-potter-auth/user") ? localStorage.getItem("@harry-potter-auth/user") : {};

const slice = createSlice({
    name: "auth",
    initialState: {
        loading: false,
        user: user,
        error: null
    },
    reducers: {},
    extraReducers: {}
});

export default slice.reducer;
