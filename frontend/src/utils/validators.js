// src/utils/validators.js
export const phoneValidator = (value) => {
    const africanRegex = /^(?:\+?(?:234|233|254|27))[7-9][0-1]\d{8}$/;
    return africanRegex.test(value);
  };