const router = require("express").Router();
const commitmentsController = require("../../controllers/commitmentsController");

router
  .route("/")
  .get(commitmentsController.findAllCommitments)
  .post(commitmentsController.createCommitment);

router
  .route("/:id")
  .get(commitmentsController.findCommitmentById)
  .put(commitmentsController.updateCommitment)
  .delete(commitmentsController.destroyCommitment);

module.exports = router;
