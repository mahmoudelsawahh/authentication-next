import { configureStore } from '@reduxjs/toolkit';
import UserSlice from './dataSlice/UserSlice';

 const Store = configureStore({
  reducer: {
    Authentication : UserSlice,
  },
})

export default Store