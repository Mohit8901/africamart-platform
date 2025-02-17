// src/api/axiosConfig.js
import axios from 'axios';

const africamartAPI = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  timeout: 15000,
  headers: {
    'Content-Type': 'application/json',
    'X-Africa-Region': 'WAT' // West Africa Timezone
  }
});

// Add Africa-specific error handling
africamartAPI.interceptors.response.use(
  response => response,
  error => {
    if (error.code === 'ECONNABORTED') {
      console.error('Connection timeout - common in low-bandwidth regions');
    }
    return Promise.reject(error);
  }
);

export default africamartAPI;