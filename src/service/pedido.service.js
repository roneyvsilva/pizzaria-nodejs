const Pedido = require("../model/Pedido");

const findPedidoByIdService = (id) => {
    return Pedido.findById(id);
}

const findAllPedidoService = (limit, offset) => {
    return Pedido.find().limit(limit).skip(offset);
}

const createPedidoService = (body) => {
    return Pedido.create(body);
}


const deletePedidoService = (id) => {
    return Pedido.findByIdAndRemove(id);
}

const updateStatusPedidoService = (id) => {
    return Pedido.findOneAndUpdate({ _id: id }, { $set: { concluido: true } }, { returnDocument: "after" });
}


module.exports = {
    findPedidoByIdService,
    findAllPedidoService,
    createPedidoService,
    deletePedidoService,
    updateStatusPedidoService
}
