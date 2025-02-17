// src/store/slices/authSlice.js
import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: null,
    loading: false,
    error: null
  },
  reducers: {
    initiateOTP: (state, action) => {
      // Integration with your backend OTP endpoint
    },
    verifyOTP: (state, action) => {
      // OTP verification logic
    },
    setAfricanUser: (state, action) => {
      state.user = {
        ...action.payload,
        currency: action.payload.country === 'NG' ? 'NGN' : 'KES'
      };
    }
  }
});

export const { initiateOTP, verifyOTP, setAfricanUser } = authSlice.actions;
export default authSlice.reducer;