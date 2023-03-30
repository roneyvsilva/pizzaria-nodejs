const ObjectId = require("mongoose").Types.ObjectId;

const validaCategoria = (req, res, next) => {

    let erros = [];
    if (!req.body.nome) {
        return res.status(400).send({ message: `O campo 'nome' precisa ser preenchido.` });
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
    validaIdBody,
    validaIdParams
};
