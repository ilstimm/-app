import {configureStore} from '@reduxjs/toolkit';
import {usernameSlice} from './usernameSlice';

export default configureStore({
  reducer: {
    username: usernameSlice.reducer,
  },
});
