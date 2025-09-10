// src/services/users.js
import { api } from "../api";

// >>> AXIOS AQUI: todas as chamadas HTTP
export async function listUsers() {
  const { data } = await api.get("/users");
  return data;
}

export async function createUser(payload) {
  const { data } = await api.post("/users", payload);
  return data;
}

export async function updateUser(id, payload) {
  const { data } = await api.patch(`/users/${id}`, payload);
  return data;
}

export async function deleteUser(id) {
  const { data } = await api.delete(`/users/${id}`);
  return data;
}
