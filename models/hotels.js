module.exports = function(sequelize, DataTypes) {
  var Hotel = sequelize.define("Hotel", {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });

  return Hotel;
};
