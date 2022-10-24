const todosController = require("../controllers/todo.controller");
const router = require("express").Router();

//CRUD
router
  .post("/", todosController.create)
  .get("/", todosController.findAll)
  .get("/:id", todosController.findOne)
  .put("/:id", todosController.update)
  .delete("/", todosController.deleteAll)
  .delete("/:id", todosController.delete);

module.exports = router;
