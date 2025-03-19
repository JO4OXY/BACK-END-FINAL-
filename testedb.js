require("dotenv").config();
const { Pool } = require("pg");

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: { rejectUnauthorized: false }, // Necessário para conexão no Neon Tech
});

async function testConnection() {
  try {
    const client = await pool.connect();
    console.log("✅ Conectado ao Banco de Dados com sucesso!");
    client.release();
  } catch (error) {
    console.error("❌ Erro ao conectar no banco:", error);
  }
}

testConnection();
