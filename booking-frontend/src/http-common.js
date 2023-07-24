import axios from "axios";

export default axios.create({
  baseURL: import.meta.env.VITE_APP_BASEURL || "http://localhost:3000/",
  headers: {
    "Content-type": "application/json"
  }
});