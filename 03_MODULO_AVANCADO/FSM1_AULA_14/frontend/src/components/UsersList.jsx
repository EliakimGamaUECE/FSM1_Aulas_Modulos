import UserItem from "./UserItem";

export default function UsersList({ users, onUpdate, onDelete, busyId }) {
  return (
    <ul style={{ listStyle: "none", padding: 0, display: "grid", gap: 8 }}>
      {users.map((u) => (
        <UserItem
          key={u.id}
          user={u}
          onUpdate={onUpdate}
          onDelete={onDelete}
          busy={busyId === u.id}
        />
      ))}
    </ul>
  );
}
