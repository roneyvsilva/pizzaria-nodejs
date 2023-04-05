const pedidoService = require("../service/pedido.service");

const findPedidoByIdController = async (req, res) => {
    try {
        const retorno = await pedidoService.findPedidoByIdService(req.params.id);
        if (retorno != null) {
            return res.status(200).send(retorno);
        } else {
            return res.status(404).send({ message: `Pedido não encontrado.` });
        }
    } catch (e) {
        if (e.kind == "ObjectId") {
            return res.status(400).send({ message: `ID informado está incorreto.` });
        }
        console.log(`Erro: ${e.message}`);
        return res.status(500).send({ message: `Erro inesperado. Tente novamente!` });
    }
}

const findAllPedidoController = async (req, res) => {
    try {
        const retorno = await pedidoService.findAllPedidoService(req.query.limit, req.query.offset);
        if (retorno.length > 0) {
            return res.status(200).send(retorno);
        } else {
            return res.status(404).send({ message: `Nenhum Pedido encontrado.` });
        }
    } catch (e) {
        console.log(`Erro: ${e.message}`);
        return res.status(500).send({ message: `Erro inesperado. Tente novamente!` });
    }
}

const createPedidoController = async (req, res) => {
    try {
        const body = {
            ...req.body,
            userId: req.userId
        }
        return res.status(201).send(await pedidoService.createPedidoService(body));
    } catch (e) {
        console.log(`Erro: ${e.message}`);
        return res.status(500).send({ message: `Erro inesperado. Tente novamente!` });
    }
}


const deletePedidoController = async (req, res) => {
    try {
        const retorno = await pedidoService.deletePedidoService(req.params.id);
        if (retorno != null) {
            return res.status(200).send(retorno);
        } else {
            return res.status(404).send({ message: `Pedido não encontrado.` });
        }
    } catch (e) {
        console.log(`Erro: ${e.message}`);
        return res.status(500).send({ message: `Erro inesperado. Tente novamente!` });
    }
}

const udpateStatusPedidoController = async (req, res) => {
    try {
        const retorno = await pedidoService.updateStatusPedidoService(req.params.id);
        if (retorno != null) {
            return res.status(200).send(retorno);
        } else {
            return res.status(404).send({ message: `Pedido não encontrado.` });
        }
    } catch (e) {
        console.log(`Erro: ${e.message}`);
        return res.status(500).send({ message: `Erro inesperado. Tente novamente!` });
    }
}

module.exports = {
    findPedidoByIdController,
    findAllPedidoController,
    createPedidoController,
    deletePedidoController,
    udpateStatusPedidoController
}
