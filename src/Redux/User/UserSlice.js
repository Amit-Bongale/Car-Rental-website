import { createSlice } from "@reduxjs/toolkit";

export const UserdetailsSlice = createSlice ({
    name : 'user',
    initialState : {
        name : " ",
        customer_id : " ",
        loggedin : false
    },
    reducers : {
        userlogin : (state, action) => {
            state.name = action.payload.name;
            state.customer_id = action.payload.customer_id;
            state.loggedin = true;
        },
        userlogout : (state) => {
            state.name = " "
            state.customer_id = " "
            state.loggedin = false;
        }
    }
})

export const {userlogin , userlogout} = UserdetailsSlice.actions

export default UserdetailsSlice.reducer