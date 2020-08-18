const db = require("../models");

module.exports = {
  findAllCommitments: (req, res) => {
    db.Commitments.findAll({
      include: [db.Tasks],
    })
      .then((dbModel) => {
        res.status(200).json(dbModel);
      })
      .catch((err) => {
        res.status(422).json(err);
      });
  },
  findCommitmentById: (req, res) => {
    db.Commitments.findOne({
      where: {
        id: req.params.id,
      },
      include: [db.Tasks],
    })
      .then((dbModel) => res.status(200).json(dbModel))
      .catch((err) => {
        res.status(422).json(err);
      });
  },
  createCommitment: (req, res) => {
    db.Commitments.create(req.body)
      .then((dbModel) => res.status(200).json(dbModel))
      .catch((err) => {
        res.status(422).json(err);
      });
  },
  updateCommitment: (req, res) => {
    db.Commitments.update(
      { title: req.body.title },
      {
        where: {
          id: req.body.id,
        },
      }
    )
      .then((dbModel) => res.status(200).json(dbModel))
      .catch((err) => {
        res.status(422).json(err);
      });
  },
  destroyCommitment: (req, res) => {
    db.Commitments.destroy({
      where: {
        id: req.body.id,
      },
    })
      .then((dbModel) => res.status(200).json(dbModel))
      .catch((err) => {
        res.status(422).json(err);
      });
  },
};
