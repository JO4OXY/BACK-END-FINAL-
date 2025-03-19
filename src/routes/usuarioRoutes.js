const express = require("express");
const router = express.Router();
const pool = require("../db");

// Buscar todos os usuários
router.get("/", async (req, res) => {
  try {
    const result = await pool.query("SELECT id, nome, email FROM usuarios");
    res.json(result.rows);
  } catch (error) {
    res.status(500).json({ error: "Erro ao buscar usuários" });
  }
});

// Criar usuário
router.post("/", async (req, res) => {
  const { nome, email, senha, tipo_usuario } = req.body;
  try {
    const result = await pool.query(
      "INSERT INTO usuarios (nome, email, senha, tipo_usuario) VALUES ($1, $2, $3, $4) RETURNING *",
      [nome, email, senha, tipo_usuario]
    );
    res.status(201).json(result.rows[0]);
  } catch (error) {
    res.status(500).json({ error: "Erro ao criar usuário" });
  }
});

module.exports = router;
