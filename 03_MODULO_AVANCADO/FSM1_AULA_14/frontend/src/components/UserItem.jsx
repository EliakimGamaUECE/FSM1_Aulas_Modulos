import { useState } from "react";

export default function UserItem({ user, onUpdate, onDelete, busy }) {
  const [editing, setEditing] = useState(false);
  const [edit, setEdit] = useState({ name: user.name ?? "", email: user.email ?? "" });

  function cancel() {
    setEditing(false);
    setEdit({ name: user.name ?? "", email: user.email ?? "" });
  }

  async function save() {
    // envia só os campos alterados, se quiser:
    const patch = {};
    if (edit.name !== user.name) patch.name = edit.name;
    if (edit.email !== user.email) patch.email = edit.email;
    if (Object.keys(patch).length === 0) return setEditing(false);
    await onUpdate(user.id, patch);
    setEditing(false);
  }

  return (
    <li style={{ border: "1px solid #eee", borderRadius: 12, padding: 12, display: "grid", gap: 8 }}>
      {!editing ? (
        <>
          <div>
            <strong>#{user.id}</strong> — {user.name} <span style={{ color: "#666" }}>({user.email})</span>
          </div>
          <div style={{ display: "flex", gap: 8 }}>
            <button onClick={() => setEditing(true)} disabled={busy}>Editar</button>
            <button onClick={() => onDelete(user.id)} disabled={busy}
              style={{ background: "#ffecec", borderColor: "#ffc9c9" }}>
              {busy ? "Processando..." : "Excluir"}
            </button>
          </div>
        </>
      ) : (
        <>
          <div style={{ display: "grid", gap: 8, gridTemplateColumns: "1fr 1fr" }}>
            <input
              placeholder="Nome"
              value={edit.name}
              onChange={(e) => setEdit((s) => ({ ...s, name: e.target.value }))}
            />
            <input
              placeholder="Email"
              type="email"
              value={edit.email}
              onChange={(e) => setEdit((s) => ({ ...s, email: e.target.value }))}
            />
          </div>
          <div style={{ display: "flex", gap: 8 }}>
            <button onClick={save} disabled={busy}>{busy ? "Salvando..." : "Salvar"}</button>
            <button onClick={cancel} type="button">Cancelar</button>
          </div>
        </>
      )}
    </li>
  );
}
