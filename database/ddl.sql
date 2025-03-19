CREATE TABLE usuarios (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    senha VARCHAR(255) NOT NULL,
    tipo_usuario VARCHAR(20) CHECK (tipo_usuario IN ('admin', 'cliente')) NOT NULL
);

CREATE TABLE produtos (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    descricao TEXT,
    preco DECIMAL(10,2) NOT NULL,
    estoque INT NOT NULL
);

CREATE TABLE rotinas (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    descricao TEXT NOT NULL,
    tipo VARCHAR(50) CHECK (tipo IN ('limpeza', 'hidratação', 'tratamento')) NOT NULL
);

CREATE TABLE resenhas (
    id SERIAL PRIMARY KEY,
    usuario_id INT REFERENCES usuarios(id) ON DELETE CASCADE,
    produto_id INT REFERENCES produtos(id) ON DELETE CASCADE,
    avaliacao INT CHECK (avaliacao BETWEEN 1 AND 5) NOT NULL,
    comentario TEXT,
    data_criacao TIMESTAMP DEFAULT NOW()
);
