require("dotenv").config();
const express = require("express");
const cors = require("cors");
const { Pool } = require("pg");
const usuarioRoutes = require("./src/routes/usuarioRoutes");
const app = express();
app.use(express.json());
app.use(cors());
app.use("/usuarios", usuarioRoutes);

// Configuração do Banco de Dados
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: { rejectUnauthorized: false }, // Necessário para Neon Tech
});

// Teste de conexão
pool.connect()
  .then(() => console.log("✅ Conectado ao Banco de Dados!"))
  .catch((err) => console.error("❌ Erro ao conectar no banco:", err));

// Rota de teste
app.get("/", (req, res) => {
  res.send("API de Skin Care rodando! 🚀");
});

// Rodando o servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 Servidor rodando na porta ${PORT}`);
});
