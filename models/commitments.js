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

  Commitments.associate = function (models) {
    Commitments.hasMany(models.Tasks, {
      onDelete: "cascade",
    });
  };
  return Commitments;
};
