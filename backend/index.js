const express = require("express");
const cors = require("cors");

const app = express();

// CORS (permitimos Vercel + local)
app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "https://proyecto-2026.vercel.app"
    ]
  })
);

app.use(express.json());

// Rutas
app.get("/", (req, res) => {
  res.send("Backend funcionando 🚀");
});

app.get("/usuarios", (req, res) => {
  res.json([
    { id: 1, nombre: "Rubén" },
    { id: 2, nombre: "Ana" }
  ]);
});

// PUERTO DINÁMICO (OBLIGATORIO EN FLY)
const PORT = process.env.PORT || 3000;

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Servidor escuchando en ${PORT}`);
});
