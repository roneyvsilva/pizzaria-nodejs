const express = require("express");
require("dotenv").config(); // configuração de variáveis de ambiente
const cors = require("cors");

const connectDB = require("./src/database/database"); // arquivo de conexão com o banco de dados
const categoriaRouter = require("./src/router/categoria.router"); // arquivo de rotas da categoria
const app = express();
const port = process.env.PORT;


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


app.listen(port, () => {
    console.log(`Servidor rodando em: http://localhost:${port}`);
});
