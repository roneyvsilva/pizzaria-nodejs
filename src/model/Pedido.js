const mongoose = require("mongoose");

const PedidoSchema = new mongoose.Schema({
    produtos: [
        {
            _id: { type: mongoose.Schema.Types.ObjectId, required: true, ref: "produtos" },
            quantidade: { type: Number, required: true }
        }
    ],
    createAt: { type: Date, required: true, default: Date.now },
    precoTotal: { type: Number, required: true },
    frete: { type: Number, required: true },
    userId: { type: mongoose.Schema.Types.ObjectId, required: true, ref: "usuarios" },
    enderecoId: { type: mongoose.Schema.Types.ObjectId, required: true },
    concluido: { type: Boolean, required: true, default: false }
});

const Pedido = mongoose.model("pedidos", PedidoSchema);

module.exports = Pedido;
