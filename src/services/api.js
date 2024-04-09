import axios from "axios";

export const api = axios.create({
  baseURL: 'https://foodexplorer-api-d5co.onrender.com',
  withCredentials: true
});