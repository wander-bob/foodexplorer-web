import axios from "axios";

export const api = axios.create({
  baseURL: 'https://foodexplorer-api-la9m.onrender.com',
  withCredentials: true
});