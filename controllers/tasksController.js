const db = require("../models");

module.exports = {
  findAllTasks: (req, res) => {
    const query = {};

    if (req.query.CommitmentId) {
      query.CommitmentId = req.query.CommitmentId;
    }

    db.Tasks.findAll({
      where: query,
      include: [db.Commitments],
    })
      .then((dbModel) => res.status(200).json(dbModel))
      .catch((err) => res.status(422).json(err));
  },

  findTaskById: (req, res) => {
    db.Tasks.findAll({
      where: {
        id: req.body.id,
      },
      include: [db.Commitments],
    })
      .then((dbModel) => res.status(200).json(dbModel))
      .catch((err) => res.status(422).json(err));
  },

  createTask: (req, res) => {
    db.Tasks.create(req.body)
      .then((dbModel) => res.status(200).json(dbModel))
      .catch((err) => res.status(422).json(err));
  },

  updateTask: (req, res) => {
    db.Tasks.update(req.body, {
      where: {
        id: req.body.id,
      },
    })
      .then((dbModel) => res.status(200).json(dbModel))
      .catch((err) => res.status(422).json(err));
  },

  deleteTask: (req, res) => {
    db.Tasks.destroy({
      where: {
        id: req.body.id,
      },
    })
      .then((dbModel) => res.status(200).json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
};
