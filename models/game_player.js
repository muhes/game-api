'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class game_player extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      game_player.hasOne(models.room, {foreignKey: 'roomId'})
    }
  };
  game_player.init({
    name: DataTypes.STRING,
    roomId: DataTypes.INTEGER

  }, {
    sequelize,
    modelName: 'game_player',
  });
  return game_player;
};