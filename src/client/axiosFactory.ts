import axios from "axios";

const clientInstance = axios.create({
  baseURL: process.env.BASE_URL || "localhost"
});

export { clientInstance as httpClient };
