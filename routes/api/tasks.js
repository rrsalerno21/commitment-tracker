const router = require("express").Router();
const tasksController = require("../../controllers/tasksController");

router
  .route("/")
  .get(tasksController.findAllTasks)
  .post(tasksController.createTask);

router
  .route("/:id")
  .get(tasksController.findTaskById)
  .put(tasksController.updateTask)
  .delete(tasksController.deleteTask);

module.exports = router;
