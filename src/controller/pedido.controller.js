const pedidoService = require("../service/pedido.service");

const findPedidoByIdController = async (req, res) => {
    try {
        return res.status(200).send(await pedidoService.findPedidoByIdService(req.params.id));
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
        return res.status(200).send(await pedidoService.findAllPedidoService(req.query.limit, req.query.offset));
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
        return res.status(200).send(await pedidoService.deletePedidoService(req.params.id));
    } catch (e) {
        console.log(`Erro: ${e.message}`);
        return res.status(500).send({ message: `Erro inesperado. Tente novamente!` });
    }
}

const udpateStatusPedidoController = async (req, res) => {
    try {
        return res.status(200).send(await pedidoService.updateStatusPedidoService(req.params.id));
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
