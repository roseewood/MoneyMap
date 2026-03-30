import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api",
});


export const getTransactions = () => API.get("/transactions");
export const addTransaction = (data) => API.post("/transactions", data);
export const deleteTransaction = (id) =>
  API.delete(`/transactions/${id}`);

API.interceptors.request.use((req) => {
  const token = localStorage.getItem("token");
  if (token) req.headers.authorization = token;
  return req;
});