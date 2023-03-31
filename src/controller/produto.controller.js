const produtoService = require("../service/produto.service");

const findProductByIdController = async (req, res) => {
    try {
        const retorno = await produtoService.findProductByIdService(req.params.id);
        if (retorno != null) {
            return res.status(200).send(retorno);
        } else {
            return res.status(404).send({ message: `Produto não encontrado.` });
        }
    } catch (e) {
        if (e.kind == "ObjectId") {
            return res.status(400).send({ message: `ID informado está incorreto.` });
        }
        console.log(`Erro: ${e.message}`);
        return res.status(500).send({ message: `Erro inesperado. Tente novamente!` });
    }
}

const findAllProductController = async (req, res) => {
    try {
        const retorno = await produtoService.findAllProductService(req.query.limit, req.query.offset);
        if (retorno.length > 0) {
            return res.status(200).send(retorno);
        } else {
            return res.status(404).send({ message: `Produto não encontrado.` });
        }
    } catch (e) {
        console.log(`Erro: ${e.message}`);
        return res.status(500).send({ message: `Erro inesperado. Tente novamente!` });
    }
}

const createProductController = async (req, res) => {
    try {
        const body = {
            ...req.body,
            //userId: req.userId,            
        }
        return res.status(201).send(await produtoService.createProductService(body));
    } catch (e) {
        console.log(`Erro: ${e.message}`);
        return res.status(500).send({ message: `Erro inesperado. Tente novamente!` });
    }
}

const addCategoriaProdutoController = async (req, res) => {
    try {
        const retorno = await produtoService.addCategoriaProdutoService(req.params.id, req.body);
        if (retorno != null) {
            res.status(201).send(retorno);
        } else {
            res.status(404).send({ message: `Produto não encontrado. Categoria não adicionada.` });
        }
    } catch (e) {
        console.log(`Erro: ${e.message}`);
        return res.status(500).send({ message: `Erro inesperado. Tente novamente!` });
    }
}

const removeCategoriaProdutoController = async (req, res) => {
    try {
        const retorno = await produtoService.removeCategoriaProdutoService(req.params.id, req.body);
        if (retorno != null) {
            res.status(200).send(retorno);
        } else {
            res.status(404).send({ message: `Produto não encontrado. Categoria não removida.` });
        }
    } catch (e) {
        console.log(`Erro: ${e.message}`);
        return res.status(500).send({ message: `Erro inesperado. Tente novamente!` });
    }
}

const updateProductController = async (req, res) => {
    try {
        const retorno = await produtoService.updateProductService(req.params.id, req.body);
        if (retorno != null) {
            return res.status(200).send(retorno);
        } else {
            return res.status(404).send({ message: `Produto não encontrado.` });
        }
    } catch (e) {
        console.log(`Erro: ${e.message}`);
        return res.status(500).send({ message: `Erro inesperado. Tente novamente!` });
    }
}

const deleteProductController = async (req, res) => {
    try {
        const retorno = await produtoService.deleteProductService(req.params.id);
        if (retorno != null) {
            return res.status(200).send(retorno);
        } else {
            return res.status(404).send({ message: `Produto não encontrado.` });
        }
    } catch (e) {
        console.log(`Erro: ${e.message}`);
        return res.status(500).send({ message: `Erro inesperado. Tente novamente!` });
    }
}

module.exports = {
    findProductByIdController,
    findAllProductController,
    createProductController,
    updateProductController,
    deleteProductController,
    addCategoriaProdutoController,
    removeCategoriaProdutoController
}
