const express = require("express");
require("dotenv").config(); // configuração de variáveis de ambiente
const cors = require("cors");

const connectDB = require("./src/database/database"); // arquivo de conexão com o banco de dados
const categoriaRouter = require("./src/router/categoria.router"); // arquivo de rotas da categoria
const produtoRouter = require("./src/router/produto.router"); // arquivo de rotas do produto
const usuarioRouter = require("./src/router/usuario.router"); // arquivo de rotas do usuário
const docsRouter = require("./src/router/docs.router"); // arquivo de rotas de docs
const authRouter = require("./src/router/auth.router"); // arquivo de rotas de autenticação
const carrinhoRouter = require("./src/router/carrinho.router"); // arquivo de rotas do carrinho

const app = express();


app.use(express.json());
app.use(cors(
    {
        origin: ["localhost:3001", "localhost:3002"],
        methods: ["GET", "POST", "PUT", "DELETE"]
    }
));

connectDB(); // conectando com o banco de dados

app.get("/", (req, res) => {
    res.send({ message: "Bem vindo a Pizzaria..." });
});
app.use("/categoria", categoriaRouter); // chamando as rotas da categoria
app.use("/produto", produtoRouter); // chamando as rotas do produto
app.use("/usuario", usuarioRouter); // chamando as rotas do usuário
app.use("/docs", docsRouter); // chamando as rotas da documentação
app.use("/auth", authRouter); // chamando as rotas de autenticação
app.use("/carrinho", carrinhoRouter); // chamando as rotas do carrinho

app.listen(process.env.PORT, () => {
    console.log(`Servidor rodando em: http://localhost:${process.env.PORT}`);
});
