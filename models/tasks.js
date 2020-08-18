module.exports = function (sequelize, DataTypes) {
  const Tasks = sequelize.define("Tasks", {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      val: {
        //
      },
    },
    due_date: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      defaultValue: new Date(),
      val: {
        //
      },
    },
    completed: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      val: {},
    },
  });

  Tasks.associate = function (models) {
    Tasks.belongsTo(models.Commitments, {
      foreignKey: {
        allowNull: false,
      },
    });
  };
  return Tasks;
};
