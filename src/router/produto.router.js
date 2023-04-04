const router = require("express").Router();
const produtoController = require("../controller/produto.controller");
const authMiddleware = require("../middleware/auth.middleware");
const { validaProduto, validaIdParams, validaIdBody } = require("../middleware/validacao.middleware");
const paginacao = require("../middleware/paginacao.middleware");

// rotas GET
router.get("/findById/:id", authMiddleware, validaIdParams, produtoController.findProductByIdController);
router.get("/findAll", authMiddleware, paginacao, produtoController.findAllProductController);
// rotas POST
router.post("/create", authMiddleware, validaProduto, produtoController.createProductController);
router.post("/addCategoria/:id", authMiddleware, validaIdParams, validaIdBody, produtoController.addCategoriaProdutoController);
// rotas PUT
router.put("/update/:id", authMiddleware, validaIdParams, validaProduto, produtoController.updateProductController);
//rotas DELETE
router.delete("/remove/:id", authMiddleware, validaIdParams, produtoController.deleteProductController);
router.delete("/removeCategoria/:id", authMiddleware, validaIdParams, produtoController.removeCategoriaProdutoController);

module.exports = router;



