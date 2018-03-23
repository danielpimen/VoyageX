module.exports = function(sequelize, DataTypes) {
  var Planet = sequelize.define("Planet", {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    }
});

  Planet.associate = function(models) {
    Planet.hasMany(models.Hotel)
  };

  return Planet;
};
