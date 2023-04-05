const router = require("express").Router();
const pedidoController = require("../controller/pedido.controller");
const authMiddleware = require("../middleware/auth.middleware");
const { validaPedido, validaIdParams, validaProdutoRef } = require("../middleware/validacao.middleware");
const paginacao = require("../middleware/paginacao.middleware");

// rotas GET
router.get("/findById/:id", authMiddleware, validaIdParams, pedidoController.findPedidoByIdController);
router.get("/findAll", authMiddleware, paginacao, pedidoController.findAllPedidoController);
// rotas POST
router.post("/create", authMiddleware, validaProdutoRef, validaPedido, pedidoController.createPedidoController);
//rotas DELETE
router.delete("/remove/:id", authMiddleware, validaIdParams, pedidoController.deletePedidoController);
//rotas PATCH
router.patch("/updateStatus/:id", authMiddleware, validaIdParams, pedidoController.udpateStatusPedidoController);

module.exports = router;
