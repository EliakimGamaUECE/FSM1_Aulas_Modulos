// components/UserContext.jsx
import { createContext, useState, useEffect } from "react";

export const UserContext = createContext();

export function UserProvider({ children }) {
  const [nome, setNome] = useState("");

  // Recupera do localStorage ao iniciar
  useEffect(() => {
    const salvo = localStorage.getItem("nome");
    if (salvo) setNome(salvo);
  }, []);

  return (
    <UserContext.Provider value={{ nome, setNome }}>
      {children}
    </UserContext.Provider>
  );
}
