module.exports = function (sequelize, DataTypes) {
  const Commitments = sequelize.define("Commitments", {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        //
      },
    },
  });
  return Commitments;
};
