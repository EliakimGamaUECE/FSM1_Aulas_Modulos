import { useEffect, useState } from "react";
import { listUsers, createUser, updateUser, deleteUser } from "../services/users";
import UserForm from "./UserForm";
import UsersList from "./UsersList";

export default function UsersPage() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [busyId, setBusyId] = useState(null); // controla salvar/excluir por item
  const [error, setError] = useState("");

  async function load() {
    setLoading(true);
    setError("");
    try {
      const data = await listUsers();
      setUsers(data);
    } catch (e) {
      setError(e.message);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    load();
  }, []);

  async function handleCreate(form) {
    setError("");
    try {
      const user = await createUser(form);
      setUsers((prev) => [...prev, user]);
      return true; // para o form saber que deu certo e limpar
    } catch (e) {
      setError(e.message);
      return false;
    }
  }

  async function handleUpdate(id, patch) {
    setBusyId(id);
    setError("");
    try {
      const updated = await updateUser(id, patch);
      setUsers((prev) => prev.map((u) => (u.id === id ? updated : u)));
    } catch (e) {
      setError(e.message);
    } finally {
      setBusyId(null);
    }
  }

  async function handleDelete(id) {
    if (!confirm("Excluir este usuário?")) return;
    setBusyId(id);
    setError("");
    try {
      await deleteUser(id);
      setUsers((prev) => prev.filter((u) => u.id !== id));
    } catch (e) {
      setError(e.message);
    } finally {
      setBusyId(null);
    }
  }

  return (
    <main style={{ fontFamily: "system-ui, sans-serif", padding: 24, maxWidth: 720, margin: "0 auto" }}>
      <h1 style={{ marginBottom: 8 }}>Usuários</h1>
      <p style={{ marginTop: 0, color: "#666" }}>
        Camadas: <code>Componentes → services/users.js → api.js (Axios)</code>
      </p>

      <section style={{ margin: "24px 0", padding: 16, border: "1px solid #eee", borderRadius: 12 }}>
        <h2 style={{ marginTop: 0 }}>Criar novo usuário</h2>
        <UserForm onSubmit={handleCreate} />
      </section>

      {error && (
        <div style={{ margin: "12px 0", padding: 12, background: "#ffe9e9", border: "1px solid #ffcccc", borderRadius: 8 }}>
          <strong>Erro:</strong> {error}
        </div>
      )}

      <section style={{ marginTop: 24 }}>
        <h2 style={{ marginTop: 0 }}>Lista de usuários</h2>
        {loading ? (
          <p>Carregando...</p>
        ) : users.length === 0 ? (
          <p>Nenhum usuário ainda.</p>
        ) : (
          <UsersList
            users={users}
            onUpdate={handleUpdate}
            onDelete={handleDelete}
            busyId={busyId}
          />
        )}
      </section>

      <div style={{ marginTop: 24 }}>
        <button onClick={load} disabled={loading}>Recarregar</button>
      </div>
    </main>
  );
}
