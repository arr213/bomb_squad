'use strict';

var Sequelize = require('sequelize');
var db = require('../_db');

module.exports = db.define('playedModule', {
    time: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    strikes: {
        type: Sequelize.INTEGER,
        defaultValue: 0
    },
    completedStatus: {
        type: Sequelize.ENUM('success', 'pending', 'failed'),
        defaultValue: 'pending'
    }
});
