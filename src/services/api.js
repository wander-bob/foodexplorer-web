import axios from "axios";

export const api = axios.create({
  baseURL: 'https://foodexplorer-api-l9qe.onrender.com',
  withCredentials: true
});