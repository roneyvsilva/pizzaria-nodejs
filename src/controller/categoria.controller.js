const categoriaService = require("../service/categoria.service");

const findCategoriaByIdController = async (req, res) => {
    try {
        return res.status(200).send(await categoriaService.findCategoriaByIdService(req.params.id));
    } catch (e) {
        if (e.kind == "ObjectId") {
            return res.status(400).send({ message: `ID informado está incorreto.` });
        }
        console.log(`Erro: ${e.message}`);
        return res.status(500).send({ message: `Erro inesperado. Tente novamente!` });
    }
}

const findAllCategoriaController = async (req, res) => {
    try {
        return res.status(200).send(await categoriaService.findAllCategoriaService(req.query.limit, req.query.offset));
    } catch (e) {
        console.log(`Erro: ${e.message}`);
        return res.status(500).send({ message: `Erro inesperado. Tente novamente!` });
    }
}

const createCategoriaController = async (req, res) => {
    try {
        return res.status(201).send(await categoriaService.createCategoriaService(req.body));
    } catch (e) {
        console.log(`Erro: ${e.message}`);
        return res.status(500).send({ message: `Erro inesperado. Tente novamente!` });
    }
}

const updateCategoriaController = async (req, res) => {
    try {
        return res.status(200).send(await categoriaService.updateCategoriaService(req.params.id, req.body));
    } catch (e) {
        console.log(`Erro: ${e.message}`);
        return res.status(500).send({ message: `Erro inesperado. Tente novamente!` });
    }
}

const deleteCategoriaController = async (req, res) => {
    try {
        return res.status(200).send(await categoriaService.deleteCategoriaService(req.params.id));
    } catch (e) {
        console.log(`Erro: ${e.message}`);
        return res.status(500).send({ message: `Erro inesperado. Tente novamente!` });
    }
}

module.exports = {
    findCategoriaByIdController,
    findAllCategoriaController,
    createCategoriaController,
    updateCategoriaController,
    deleteCategoriaController
}
