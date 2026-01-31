import axios from "axios";
const SIGNUP_BASE_URL = "/api/signUp";
export const signUp = (signUpPayload) => {
  return axios.post(`${SIGNUP_BASE_URL}`, signUpPayload, {
    headers: {
      "Content-Type": "application/json",
    },
  });
};
