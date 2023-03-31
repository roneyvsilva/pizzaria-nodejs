const ObjectId = require("mongoose").Types.ObjectId;

const validaCategoria = (req, res, next) => {

    let erros = [];
    if (!req.body.nome) {
        return res.status(400).send({ message: `O campo 'nome' precisa ser preenchido.` });
    }

    return next();
}

const validaProduto = (req, res, next) => {

    let erros = [];
    if (!req.body.nome) {
        erros.push("nome");
    }
    if (!req.body.descricao) {
        erros.push("descricao");
    }
    if (!req.body.precoUnitario) {
        erros.push("precoUnitario");
    }
    if (!req.body.imagem) {
        erros.push("imagem");
    }
    if (!req.body.codigoBarra) {
        erros.push("codigoBarra");
    }

    if (erros.length > 0) {
        return res.status(400).send({ message: `O(s) campo(s) [${erros}] precisa(m) ser preenchido(s).` });
    }
    return next();
}

const validaIdBody = (req, res, next) => {
    if (!ObjectId.isValid(req.body._id)) {
        return res.status(400).send({ message: `O ID não possui os padrões necessários.` });
    }
    return next();
}

const validaIdParams = (req, res, next) => {
    if (!ObjectId.isValid(req.params.id)) {
        return res.status(400).send({ message: `O ID não possui os padrões necessários.` });
    }
    return next();
}



module.exports = {
    validaCategoria,
    validaProduto,
    validaIdBody,
    validaIdParams
};
