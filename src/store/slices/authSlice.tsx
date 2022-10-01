import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
    name: "auth",
    initialState: {
        loading: false,
        user: {},
        error: null
    },
    reducers: {},
    extraReducers: {}
});

export default slice.reducer;
