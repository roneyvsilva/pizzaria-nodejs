const Produto = require("../model/Produto");

const findProductByIdService = (id) => {
    return Produto.findById(id);
}

const findAllProductService = (limit, offset) => {
    return Produto.find().limit(limit).skip(offset);
}

const createProductService = (body) => {
    return Produto.create(body);
}

const addCategoriaProdutoService = (id, categoria) => {
    return Produto.findOneAndUpdate(
        {
            _id: id
        },
        {
            $push: {
                categorias: {
                    _id: categoria._id,
                    createdAt: categoria.createdAt
                }
            }
        },
        {
            rawResult: true
        }
    );
}

const removeCategoriaProdutoService = (id, categoria) => {
    return Produto.findOneAndUpdate(
        {
            _id: id
        },
        {
            $pull: {
                categorias: {
                    _id: categoria._id
                }
            }
        },
        {
            rawResult: true
        }
    );
}

const updateProductService = (id, body) => {
    return Produto.findByIdAndUpdate(id, body, { returnDocument: "after" });
}

const deleteProductService = (id) => {
    return Produto.findByIdAndRemove(id);
}


module.exports = {
    findProductByIdService,
    findAllProductService,
    createProductService,
    updateProductService,
    deleteProductService,
    addCategoriaProdutoService,
    removeCategoriaProdutoService
}
