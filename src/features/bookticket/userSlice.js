import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name: "user",
    initialState: {
        user: null
    },
    reducers: {
        home: (state, action) => {
            state.user = action.payload;

        },
        booking: (state) => {
            state.user = null
        },
    },


});

export const { home, booking } = userSlice.actions;
export const selectUser = (state) => state.user.user;

export default userSlice.reducer;