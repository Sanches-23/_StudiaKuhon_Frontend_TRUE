import axios from "axios";

let defaultConfig = {
    baseURL: "http://127.0.0.1:8000/api/v1/",
    headers: {
        "Content-Type": "application/json",
    },
};

const token = $cookies.get('token')
if (token) defaultConfig.headers['Authorization'] = 'Token ' + token

export const DefaultAPIInstance = axios.create(defaultConfig);
