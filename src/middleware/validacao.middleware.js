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

const validaUsuario = (req, res, next) => {
    if (!req.body.nome) {
        return res.status(400).send({ message: `Nome não foi informado.` });
    }
    if (!req.body.email) {
        return res.status(400).send({ message: `Email não foi informado.` });
    }
    if (!req.body.senha) {
        return res.status(400).send({ message: `Senha não foi informada.` });
    }
    if (!req.body.imagem) {
        return res.status(400).send({ message: `Imagem não foi informada.` });
    }

    return next();
}

const validaEndereco = (req, res, next) => {
    let erros = [];

    if (req.body.enderecos != undefined) {
        req.body.enderecos.map((value, key) => {
            if (!value.rua) {
                erros.push(`'[${key + 1}] - rua'`);
            }
            if (!value.numero) {
                erros.push(`'[${key + 1}] - numero'`);
            }
            if (!value.cep) {
                erros.push(`'[${key + 1}] - cep'`);
            }
        });
    }

    if (erros.length > 0) {
        return res.status(400).send({ message: `O(s) campo(s) [${erros}] precisa(m) ser preenchido(s).` });
    }

    return next();
}

const validaProdutoRef = (req, res, next) => {
    let erros = [];

    if (req.body.produtosFavoritos != undefined) {
        req.body.produtosFavoritos.map((value, key) => {
            if (!value._id) {
                erros.push(`'[${key + 1}] - _id'`);
            } else {
                if (!ObjectId.isValid(value._id)) {
                    erros.push(`'[${key + 1}] - _id (tipo inválido)'`);
                }
            }
            if (!value.quantidade) {
                erros.push(`'[${key + 1}] - quantidade'`);
            }
        });
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

const validaLogin = (req, res, next) => {
    let erros = [];
    if (!req.body.email) {
        erros.push("email");
    }
    if (!req.body.senha) {
        erros.push("senha");
    }

    if (erros.length > 0) {
        return res.status(400).send({ message: `O(s) campo(s) [${erros}] precisa(m) ser preenchido(s).` });
    }
    return next();
}

const validaCarrinho = (req, res, next) => {

    let erros = [];
    if (!req.body.precoTotal) {
        erros.push("precoTotal");
    }
    if (!req.body.frete) {
        erros.push("frete");
    }

    if (erros.length > 0) {
        return res.status(400).send({ message: `O(s) campo(s) [${erros}] precisa(m) ser preenchido(s).` });
    }
    return next();
}

const validaPedido = (req, res, next) => {

    let erros = [];
    if (!req.body.precoTotal) {
        erros.push("precoTotal");
    }
    if (!req.body.frete) {
        erros.push("frete");
    }
    if (!req.body.enderecoId) {
        erros.push("enderecoId");
    }

    if (erros.length > 0) {
        return res.status(400).send({ message: `O(s) campo(s) [${erros}] precisa(m) ser preenchido(s).` });
    }
    return next();
}

module.exports = {
    validaCategoria,
    validaProduto,
    validaUsuario,
    validaEndereco,
    validaProdutoRef,
    validaIdBody,
    validaIdParams,
    validaLogin,
    validaCarrinho,
    validaPedido
};
