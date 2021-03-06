var Sequelize = require("sequelize");
var sequelize = require('../db/connection');
var Mo = require('./Mo');
var Patient = require('./Patient');

var Record = sequelize.define('records', {
  date_rec: {
    type: Sequelize.DATE
  },
  date_end: {
    type: Sequelize.DATE
  },
  date_fact: {
    type: Sequelize.DATE
  },
  state: {
    type: Sequelize.INTEGER
  }},
  {
  defaultScope: {
    where: {
    }
  },
  scopes: {
    started: {
      where: {
        state: 0
      }
    },
    ended: {
      where: {
        state: 1
      }
    },
  }

});
Record.belongsTo(Mo);
Record.belongsTo(Patient);

module.exports = Record;
