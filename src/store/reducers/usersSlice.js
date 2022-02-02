import {  createSlice } from '@reduxjs/toolkit';


const initialState = {
    users: [],
    loading:true,
};


// export const incrementAsync = createAsyncThunk(
//     'counter/fetchCount',
//     async (amount) => {
//         const response = await fetchCount(amount);
//         // The value we return becomes the `fulfilled` action payload
//         return response.data;
//     }
// );


export const usersSlice = createSlice({
    name: 'users',
    initialState,

    reducers: {
        startLoading: state => {
                state.loading = true;
               },

        getUsers: (state, action) => {
           state.users = action.payload;
           state.loading = false;
        },

        hasError: (state, action) => {
            state.error = action.payload;
            state.loading = false;
                },


    }

})

export const selectUsers = (state) => state.users.value;
export const { addUser, getUsers, hasError } = usersSlice.actions;


export default usersSlice.reducer;