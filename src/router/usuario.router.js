const express = require("express");
const router = express.Router();
const usuarioController = require("../controller/usuario.controller");
const authMiddleware = require("../middleware/auth.middleware");
const { validaUsuario, validaEndereco, validaIdParams, validaIdBody, validaProdutoRef } = require("../middleware/validacao.middleware");
const paginacao = require("../middleware/paginacao.middleware");

// rotas GET
router.get("/findById/:id", authMiddleware, validaIdParams, usuarioController.findUserByIdController);
router.get("/findAll", authMiddleware, paginacao, usuarioController.findAllUsersController);
// rotas POST
router.post("/create", validaUsuario, usuarioController.createUserController);
router.post("/addAddress/:id", authMiddleware, validaIdParams, validaEndereco, usuarioController.addUserAddressController);
router.post("/addFavProduct/:id", authMiddleware, validaIdParams, validaIdBody, validaProdutoRef, usuarioController.addUserFavProductController);
// rotas PUT
router.put("/update/:id", authMiddleware, validaIdParams, validaEndereco, validaProdutoRef, usuarioController.updateUserController);
//rotas DELETE
router.delete("/remove/:id", authMiddleware, validaIdParams, usuarioController.deleteUserController);
router.delete("/removeAddress", authMiddleware, usuarioController.removeUserAddressController);
router.delete("/removeFavProduct/:id", authMiddleware, validaIdParams, usuarioController.removeUserFavProductController);

module.exports = router;
