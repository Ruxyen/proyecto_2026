import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [usuarios, setUsuarios] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/usuarios`)
      .then((res) => {
        if (!res.ok) {
          throw new Error("No se pudo conectar al backend");
        }
        return res.json();
      })
      .then((data) => setUsuarios(data))
      .catch((err) => setError(err.message));
  }, []);

  return (
    <div>
      <h1>Proyecto 2026</h1>

      {error && <p style={{ color: "red" }}>{error}</p>}

      <ul>
        {usuarios.map((u) => (
          <li key={u.id}>{u.nombre}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
