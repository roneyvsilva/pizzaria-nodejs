const carrinhoService = require("../service/carrinho.service");

const findCarrinhoByIdController = async (req, res) => {
    try {
        const retorno = await carrinhoService.findCarrinhoByIdService(req.params.id);
        if (retorno != null) {
            return res.status(200).send(retorno);
        } else {
            return res.status(404).send({ message: `Carrinho não encontrado.` });
        }
    } catch (e) {
        if (e.kind == "ObjectId") {
            return res.status(400).send({ message: `ID informado está incorreto.` });
        }
        console.log(`Erro: ${e.message}`);
        return res.status(500).send({ message: `Erro inesperado. Tente novamente!` });
    }
}

const findAllCarrinhoController = async (req, res) => {
    try {
        const retorno = await carrinhoService.findAllCarrinhoService(req.query.limit, req.query.offset);
        if (retorno.length > 0) {
            return res.status(200).send(retorno);
        } else {
            return res.status(404).send({ message: `Nenhum Carrinho encontrado.` });
        }
    } catch (e) {
        console.log(`Erro: ${e.message}`);
        return res.status(500).send({ message: `Erro inesperado. Tente novamente!` });
    }
}

const createCarrinhoController = async (req, res) => {
    try {
        const body = {
            ...req.body,
            userId: req.userId
        }
        return res.status(201).send(await carrinhoService.createCarrinhoService(body));
    } catch (e) {
        console.log(`Erro: ${e.message}`);
        return res.status(500).send({ message: `Erro inesperado. Tente novamente!` });
    }
}

const addProdutoCarrinhoController = async (req, res) => {
    try {
        const retorno = await carrinhoService.addProdutoCarrinhoService(req.params.id, req.body);
        if (retorno != null) {
            res.status(201).send(retorno);
        } else {
            res.status(404).send({ message: `Carrinho não encotrado. Produto não adicionado.` });
        }
    } catch (e) {
        console.log(`Erro: ${e.message}`);
        return res.status(500).send({ message: `Erro inesperado. Tente novamente!` });
    }
}

const removeProdutoCarrinhoController = async (req, res) => {
    try {
        const retorno = await carrinhoService.removeProdutoCarrinhoService(req.params.id, req.body);
        if (retorno != null) {
            res.status(200).send(retorno);
        } else {
            res.status(404).send({ message: `Carrinho não encontrado. Produto não removido.` });
        }
    } catch (e) {
        console.log(`Erro: ${e.message}`);
        return res.status(500).send({ message: `Erro inesperado. Tente novamente!` });
    }
}

const updateCarrinhoController = async (req, res) => {
    try {
        const retorno = await carrinhoService.updateCarrinhoService(req.params.id, req.body);
        if (retorno != null) {
            return res.status(200).send(retorno);
        } else {
            return res.status(404).send({ message: `Carrinho não encontrado.` });
        }
    } catch (e) {
        console.log(`Erro: ${e.message}`);
        return res.status(500).send({ message: `Erro inesperado. Tente novamente!` });
    }
}

const deleteCarrinhoController = async (req, res) => {
    try {
        const retorno = await carrinhoService.deleteCarrinhoService(req.params.id);
        if (retorno != null) {
            return res.status(200).send(retorno);
        } else {
            return res.status(404).send({ message: `Carrinho não encontrado.` });
        }
    } catch (e) {
        console.log(`Erro: ${e.message}`);
        return res.status(500).send({ message: `Erro inesperado. Tente novamente!` });
    }
}

module.exports = {
    findCarrinhoByIdController,
    findAllCarrinhoController,
    createCarrinhoController,
    updateCarrinhoController,
    deleteCarrinhoController,
    addProdutoCarrinhoController,
    removeProdutoCarrinhoController
}
