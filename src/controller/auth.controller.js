const authService = require("../service/auth.service");
const bcrypt = require("bcrypt");

const loginController = async (req, res) => {
    const { email, senha } = req.body;

    const usuario = await authService.loginService(email);

    if (!usuario) {
        return res.status(400).send({ message: "Usuário não encontrado." });
    }

    const senhaValida = await bcrypt.compare(senha, usuario.senha);

    if (!senhaValida) {
        return res.status(400).send({ message: "Senha inválida." });
    }

    const token = authService.generateToken(usuario.id);

    res.status(200).send({ email, token });
}

module.exports = { loginController };
