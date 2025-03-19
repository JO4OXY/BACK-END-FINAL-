const pool = require("../../config/database");

class ProductModel {
  static async getAll() {
    const { rows } = await pool.query("SELECT * FROM produtos");
    return rows;
  }

  static async getById(id) {
    const { rows } = await pool.query("SELECT * FROM produtos WHERE id = $1", [id]);
    return rows[0];
  }

  static async create(nome, descricao, preco) {
    const { rows } = await pool.query(
      "INSERT INTO produtos (nome, descricao, preco) VALUES ($1, $2, $3) RETURNING *",
      [nome, descricao, preco]
    );
    return rows[0];
  }

  static async update(id, nome, descricao, preco) {
    const { rows } = await pool.query(
      "UPDATE produtos SET nome = $1, descricao = $2, preco = $3 WHERE id = $4 RETURNING *",
      [nome, descricao, preco, id]
    );
    return rows[0];
  }

  static async delete(id) {
    const { rows } = await pool.query("DELETE FROM produtos WHERE id = $1 RETURNING *", [id]);
    return rows[0];
  }
}

module.exports = ProductModel;
