const Carrinho = require("../model/Carrinho");

const findCarrinhoByIdService = (id) => {
    return Carrinho.findById(id);
}

const findAllCarrinhoService = (limit, offset) => {
    return Carrinho.find().limit(limit).skip(offset);
}

const createCarrinhoService = (body) => {
    return Carrinho.create(body);
}

const addProdutoCarrinhoService = (id, produto) => {
    return Carrinho.findOneAndUpdate(
        {
            _id: id
        },
        {
            $push: {
                produtos: {
                    _id: produto._id,
                    createdAt: produto.createdAt
                }
            }
        },
        {
            new: true
        }
    );
}

const removeProdutoCarrinhoService = (id, produto) => {
    return Carrinho.findOneAndUpdate(
        {
            _id: id
        },
        {
            $pull: {
                produtos: {
                    _id: produto._id
                }
            }
        },
        {
            new: true
        }
    );
}

const updateCarrinhoService = (id, body) => {
    return Carrinho.findByIdAndUpdate(id, body, { returnDocument: "after" });
}

const deleteCarrinhoService = (id) => {
    return Carrinho.findByIdAndRemove(id);
}


module.exports = {
    findCarrinhoByIdService,
    findAllCarrinhoService,
    createCarrinhoService,
    updateCarrinhoService,
    deleteCarrinhoService,
    addProdutoCarrinhoService,
    removeProdutoCarrinhoService
}
