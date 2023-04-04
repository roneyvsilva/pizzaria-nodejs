const router = require("express").Router();
const carrinhoController = require("../controller/carrinho.controller");
const authMiddleware = require("../middleware/auth.middleware");
const { validaCarrinho, validaIdParams, validaIdBody, validaProdutoRef } = require("../middleware/validacao.middleware");
const paginacao = require("../middleware/paginacao.middleware");

// rotas GET
router.get("/findById/:id", authMiddleware, validaIdParams, carrinhoController.findCarrinhoByIdController);
router.get("/findAll", authMiddleware, paginacao, carrinhoController.findAllCarrinhoController);
// rotas POST
router.post("/create", authMiddleware, validaProdutoRef, validaCarrinho, carrinhoController.createCarrinhoController);
router.post("/addProduto/:id", authMiddleware, validaIdParams, validaIdBody, validaProdutoRef, carrinhoController.addProdutoCarrinhoController);
// rotas PUT
router.put("/update/:id", authMiddleware, validaIdParams, validaCarrinho, carrinhoController.updateCarrinhoController);
//rotas DELETE
router.delete("/remove/:id", authMiddleware, validaIdParams, carrinhoController.deleteCarrinhoController);
router.delete("/removeProduto/:id", authMiddleware, validaIdParams, validaIdBody, carrinhoController.removeProdutoCarrinhoController);

module.exports = router;
