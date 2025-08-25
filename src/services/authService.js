import axios from "axios";

const API_URL = "http://localhost:5000/auth/";

const register = (data) => {
  return axios
    .post(API_URL + "register", data, {
      headers: { "Content-Type": "application/json" },
    })
    .then((res) => res.data);
};

const login = (data) => {
  return axios
    .post(API_URL + "login", data, {
      headers: { "Content-Type": "application/json" },
    })
    .then((res) => res.data);
};

export default { register, login };
