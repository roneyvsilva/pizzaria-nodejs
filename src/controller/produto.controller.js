const produtoService = require("../service/produto.service");

const findProductByIdController = async (req, res) => {
    try {
        return res.status(200).send(await produtoService.findProductByIdService(req.params.id));
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
        return res.status(200).send(await produtoService.findAllProductService(req.query.limit, req.query.offset));
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
        const produto = await produtoService.addCategoriaProdutoService(req.params.id, req.body);
        if (produto.value != null) {
            res.status(201).send({ message: `Categoria adicionada ao produto com sucesso.` });
        } else {
            res.status(400).send({ message: `Algo de errado com a categoria. Categoria não adicionado.` });
        }
    } catch (e) {
        console.log(`Erro: ${e.message}`);
        return res.status(500).send({ message: `Erro inesperado. Tente novamente!` });
    }
}

const removeCategoriaProdutoController = async (req, res) => {
    try {
        const produto = await produtoService.removeCategoriaProdutoService(req.params.id, req.body);
        if (produto.value != null) {
            res.status(200).send({ message: `Categoria removida do produto com sucesso.` });
        } else {
            res.status(400).send({ message: `Algo de errado com a categoria. Categoria não removida.` });
        }
    } catch (e) {
        console.log(`Erro: ${e.message}`);
        return res.status(500).send({ message: `Erro inesperado. Tente novamente!` });
    }
}

const updateProductController = async (req, res) => {
    try {
        return res.status(200).send(await produtoService.updateProductService(req.params.id, req.body));
    } catch (e) {
        console.log(`Erro: ${e.message}`);
        return res.status(500).send({ message: `Erro inesperado. Tente novamente!` });
    }
}

const deleteProductController = async (req, res) => {
    try {
        return res.status(200).send(await produtoService.deleteProductService(req.params.id));
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
