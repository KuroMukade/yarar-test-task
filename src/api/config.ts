import axios from "axios";

export const api = axios.create({
  baseURL: 'http://localhost:3000',
  headers: {
    'X_API_KEY': import.meta.env.VITE_APP_MAPS_KEY
  }
})