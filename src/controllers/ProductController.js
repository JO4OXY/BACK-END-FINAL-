const ProductModel = require("../models/ProductModel");

class ProductController {
  static async getAll(req, res) {
    const produtos = await ProductModel.getAll();
    res.json(produtos);
  }

  static async getById(req, res) {
    const produto = await ProductModel.getById(req.params.id);
    if (!produto) return res.status(404).json({ error: "Produto não encontrado" });
    res.json(produto);
  }

  static async create(req, res) {
    const { nome, descricao, preco } = req.body;
    const produto = await ProductModel.create(nome, descricao, preco);
    res.status(201).json(produto);
  }

  static async update(req, res) {
    const { nome, descricao, preco } = req.body;
    const produto = await ProductModel.update(req.params.id, nome, descricao, preco);
    if (!produto) return res.status(404).json({ error: "Produto não encontrado" });
    res.json(produto);
  }

  static async delete(req, res) {
    const produto = await ProductModel.delete(req.params.id);
    if (!produto) return res.status(404).json({ error: "Produto não encontrado" });
    res.json({ message: "Produto removido com sucesso" });
  }
}

module.exports = ProductController;
