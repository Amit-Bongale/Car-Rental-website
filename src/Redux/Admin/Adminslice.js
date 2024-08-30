import { createSlice } from '@reduxjs/toolkit'

export const AdminSlice = createSlice({
  name: 'admin',
  initialState: {
    value: false,
  },
  reducers: {
    adminlogin: (state) => {
      state.value = true
    },
    adminlogout: (state) => {
      state.value = false
    },
  },

})

// Action creators are generated for each case reducer function
export const { adminlogin , adminlogout } = AdminSlice.actions

export default AdminSlice.reducer