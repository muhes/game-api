'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('game_players', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      //name
      name: {
        type: Sequelize.STRING
      },
      room_id: {
        type: Sequelize.STRING
      },
      host: {
        type: Sequelize.BOOLEAN
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },  
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('game_players');
  }
};