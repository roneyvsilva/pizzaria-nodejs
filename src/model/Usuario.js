const mongoose = require("mongoose");
const bcrypt = require("bcrypt");


const UsuarioSchema = new mongoose.Schema({
    nome: { type: String, required: true },
    email: { type: String, unique: true, required: true },
    senha: { type: String, required: true },
    imagem: { type: String, required: true },
    enderecos: [{
        rua: { type: String, required: true },
        numero: { type: Number, required: true },
        complemento: { type: String, required: false },
        cep: { type: String, required: true },
        createAt: { type: Date, required: true, default: Date.now() }
    }],
    createAt: { type: Date, required: true, default: Date.now() },
    produtosFavoritos: [{
        _id: { type: mongoose.Schema.Types.ObjectId, /* unique: true, */ ref: "produtos" },
        createAt: { type: Date, default: Date.now() }
    }],
    admin: { type: Boolean, default: false }
})

UsuarioSchema.pre("save", async function (next) {
    if (this.senha) {
        this.senha = await bcrypt.hash(this.senha, 10);
    }
    next();
});

UsuarioSchema.pre("findOneAndUpdate", async function (next) {
    if (this._update.senha) {
        this._update.senha = await bcrypt.hash(this._update.senha, 10);
    }
    next();
});

const Usuario = mongoose.model("usuarios", UsuarioSchema);

module.exports = Usuario;
