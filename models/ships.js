module.exports = function(sequelize, DataTypes) {
  var Ship = sequelize.define("Ship", {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });

  Ship.associate = function(models) {
    Ship.hasMany(models.Planet)
  };

  return Ship;
};
