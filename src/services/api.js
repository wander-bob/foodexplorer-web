import axios from "axios";

export const api = axios.create({
  baseURL: 'https://foodexplorer-api-dz0t.onrender.com',
  withCredentials: true
});