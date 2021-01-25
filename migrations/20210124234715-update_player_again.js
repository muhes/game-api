'use strict';

'use strict';

const { sequelize } = require("../models");

module.exports = {
  up: function(queryInterface, Sequelize) {
    // logic for transforming into the new state
    return queryInterface.addColumn(
      'game_players',
      'roomId',{
        type: Sequelize.STRING,
        primaryKey: true,
        allowNull: false
      },
     Sequelize.BOOLEAN
    );

  },

  down: function(queryInterface, Sequelize) {
    // logic for reverting the changes
    return queryInterface.removeColumn(
      'game_players',
      'room_id'
    );
  }
}