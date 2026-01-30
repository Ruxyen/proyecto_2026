const express = require("express");
const app = express();
const PORT = process.env.PORT; // sin || 3000

const cors = require("cors");

app.use(cors({
  origin: "https://proyecto-2026.vercel.app/"
}));

app.get("/", (req, res) => {
  res.send("¡Backend funcionando!");
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});

