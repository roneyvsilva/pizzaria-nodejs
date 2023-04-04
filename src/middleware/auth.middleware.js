const jwt = require("jsonwebtoken");
const { findUserByIdService } = require("../service/usuario.service");


module.exports = async (req, res, next) => {
    const authHeader = req.headers.authorization;
    if (!authHeader) {
        return res.status(401).send({ message: "O token não foi informado." });
    }

    const parts = authHeader.split(" "); // ["Bearer, <token>"]
    if (parts.length != 2) {
        return res.status(401).send({ message: "Token inválido 1." });
    }

    const [schema, token] = parts;
    if (!/^Bearer$/.test(schema)) {
        return res.status(401).send({ message: "Token mal formado." });
    }

    jwt.verify(token, process.env.SECRET, async (err, decoded) => {
        if (err) {
            return res.status(500).send({ message: "Token inválido 2." });
        }

        const usuario = await findUserByIdService(decoded.id);
        if (!usuario || !usuario.id) {
            return res.status(500).send({ message: "Token inválido 3." });
        }

        req.userId = decoded.id;

        return next();
    })

}
