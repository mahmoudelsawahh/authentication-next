import { createSlice } from '@reduxjs/toolkit'

export const UserAuth = createSlice({
  name: 'Authentication',
  initialState : {
    name : '',
    email : '',
    gender : '',
    userImage : '',
    phoneNumber : '',
    password : '',
    confirmPassword : '',
    acceptCondition : false
  },
  reducers: {
    
  },
})

// Action creators are generated for each case reducer function
// export const {  } = UserAuth.actions

export default UserAuth.reducer