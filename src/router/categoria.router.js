const router = require("express").Router();
const categoriaController = require("../controller/categoria.controller");
const authMiddleware = require("../middleware/auth.middleware");
const { validaCategoria, validaIdParams } = require("../middleware/validacao.middleware");
const paginacao = require("../middleware/paginacao.middleware");

// rotas GET
router.get("/findById/:id", authMiddleware, validaIdParams, categoriaController.findCategoriaByIdController);
router.get("/findAll", authMiddleware, paginacao, categoriaController.findAllCategoriaController);
// rotas POST
router.post("/create", authMiddleware, validaCategoria, categoriaController.createCategoriaController);
// rotas PUT
router.put("/update/:id", authMiddleware, validaIdParams, validaCategoria, categoriaController.updateCategoriaController);
//rotas DELETE
router.delete("/remove/:id", authMiddleware, validaIdParams, categoriaController.deleteCategoriaController);

module.exports = router;
