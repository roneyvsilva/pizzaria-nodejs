const express = require("express");
require("dotenv").config(); // configuração de variáveis de ambiente
const cors = require("cors");

const connectDB = require("./src/database/database"); // arquivo de conexão com o banco de dados
const app = express();
const port = 3000;


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

app.listen(port, () => {
    console.log(`Servidor rodando em: http://localhost:${port}`);
});
