const usuarioService = require("../service/usuario.service");


const findUserByIdController = async (req, res) => {
    try {
        const retorno = await usuarioService.findUserByIdService(req.params.id);
        if (!retorno) {
            return res.status(404).send({ message: "Usuário não encontrado." });
        }
        return res.status(200).send(retorno);
    } catch (e) {
        if (e.kind == "ObjectId") {
            return res.status(400).send({ message: `ID informado está incorreto.` });
        }
        console.log(`Erro: ${e.message}`);
        return res.status(500).send({ message: `Erro inesperado. Tente novamente!` });
    }
};

const findAllUsersController = async (req, res) => {
    try {
        const retorno = await usuarioService.findAllUserService(req.query.limit, req.query.offset);
        if (retorno.length > 0) {
            return res.status(200).send(retorno);
        } else {
            return res.status(404).send({ message: `Nenhum Usuario encontrado.` });
        }
    } catch (e) {
        console.log(`Erro: ${e.message}`);
        return res.status(500).send({ message: `Erro inesperado. Tente novamente!` });
    }
};

const createUserController = async (req, res) => {
    try {
        return res.status(201).send(await usuarioService.createUserService(req.body));
    } catch (e) {
        console.log(`Erro: ${e.message}`);
        return res.status(500).send({ message: `Erro inesperado. Tente novamente!` });
    }
};

const updateUserController = async (req, res) => {
    try {
        const retorno = await usuarioService.updateUserService(req.params.id, req.body);
        if (retorno != null) {
            return res.status(200).send(retorno);
        } else {
            return res.status(404).send({ message: `Usuário não encontrado.` });
        }
    } catch (e) {
        console.log(`Erro: ${e.message}`);
        return res.status(500).send({ message: `Erro inesperado. Tente novamente!` });
    }
};

const deleteUserController = async (req, res) => {
    try {
        const retorno = await usuarioService.removeUserService(req.params.id);

        if (retorno != null) {
            return res.status(200).send(retorno);
        } else {
            return res.status(404).send({ message: `Usuário não encontrado.` });
        }
    } catch (e) {
        console.log(`Erro: ${e.message}`);
        return res.status(500).send({ message: `Erro inesperado. Tente novamente!` });
    }
};

const addUserAddressController = async (req, res) => {
    try {
        const retorno = await usuarioService.addUserAddressService(req.params.id, req.body);
        if (retorno) {
            res.status(201).send(retorno);
        } else {
            res.status(400).send({ message: `Algo de errado com o endereço. Endereço não adicionado.` });
        }
    } catch (e) {
        console.log(`Erro: ${e.message}`);
        return res.status(500).send({ message: `Erro inesperado. Tente novamente!` });
    }
};

const removeUserAddressController = async (req, res) => {
    try {
        const retorno = await usuarioService.removeUserAddressService(req.body.id, req.body.enderecoId);
        let encontrou = false;
        retorno.enderecos.map((valor, chave) => {
            if (valor._id == req.body.enderecoId) {
                encontrou = true;
            }
        });

        if (!encontrou) {
            res.status(200).send(retorno);
        } else {
            res.status(400).send({ message: `Algo de errado com o endereço. Endereço não removido.` });
        }
    } catch (e) {
        console.log(`Erro: ${e.message}`);
        return res.status(500).send({ message: `Erro inesperado. Tente novamente!` });
    }
};

const addUserFavProductController = async (req, res) => {
    try {
        const retorno = await usuarioService.addUserFavProductService(req.params.id, req.body);
        if (retorno) {
            res.status(201).send(retorno);
        } else {
            res.status(400).send({ message: `Algo de errado com o produto favorito. Produto favorito não adicionado.` });
        }

    } catch (e) {
        console.log(`Erro: ${e.message}`);
        return res.status(500).send({ message: `Erro inesperado. Tente novamente!` });
    }
};

const removeUserFavProductController = async (req, res) => {
    try {
        const retorno = await usuarioService.removeUserFavProductService(req.params.id, req.body);
        if (retorno) {
            res.status(200).send(retorno);
        } else {
            res.status(400).send({ message: `Algo de errado com o produto favorito. Produto favorito não removido.` });
        }

    } catch (e) {
        console.log(`Erro: ${e.message}`);
        return res.status(500).send({ message: `Erro inesperado. Tente novamente!` });
    }
};

module.exports = {
    findUserByIdController,
    findAllUsersController,
    createUserController,
    updateUserController,
    deleteUserController,
    addUserAddressController,
    removeUserAddressController,
    addUserFavProductController,
    removeUserFavProductController
}
