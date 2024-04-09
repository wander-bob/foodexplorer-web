import axios from "axios";

export const api = axios.create({
  baseURL: 'https://foodexplorer-api-3iz9.onrender.com',
  withCredentials: true
});