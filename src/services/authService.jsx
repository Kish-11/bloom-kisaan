import axios from "axios";
const SIGNUP_BASE_URL = "/api/auth/signUp";
const LOGIN_BASE_URL = "/api/auth/login";
export const signUp = (signUpPayload) => {
  return axios.post(`${SIGNUP_BASE_URL}`, signUpPayload, {
    headers: {
      "Content-Type": "application/json",
    },
  });
};
export const logIn = (logInPayload) => {
  return axios.post(`${LOGIN_BASE_URL}`, logInPayload, {
    headers: {
      "Content-Type": "application/json",
    },
  });
};
