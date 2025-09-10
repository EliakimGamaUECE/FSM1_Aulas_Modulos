import { useState } from "react";

export default function UserForm({ onSubmit }) {
  const [form, setForm] = useState({ name: "", email: "" });
  const [saving, setSaving] = useState(false);

  async function submit(e) {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim()) return;
    setSaving(true);
    const ok = await onSubmit(form);
    if (ok) setForm({ name: "", email: "" });
    setSaving(false);
  }

  return (
    <form onSubmit={submit} style={{ display: "grid", gap: 8, gridTemplateColumns: "1fr 1fr auto" }}>
      <input
        placeholder="Nome"
        value={form.name}
        onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
      />
      <input
        placeholder="Email"
        type="email"
        value={form.email}
        onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
      />
      <button type="submit" disabled={saving}>
        {saving ? "Salvando..." : "Adicionar"}
      </button>
    </form>
  );
}
