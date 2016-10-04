/*

This seed file is only a placeholder. It should be expanded and altered
to fit the development of your application.

It uses the same file the server uses to establish
the database connection:
--- server/db/index.js

The name of the database used is set in your environment files:
--- server/env/*

This seed file has a safety check to see if you already have users
in the database. If you are developing multiple applications with the
fsg scaffolding, keep in mind that fsg always uses the same database
name in the environment files.

*/

const Promise = require('bluebird');
const chalk = require('chalk');
const db = require('./server/db');

const User = db.model('user');
const ModuleType = db.model('moduleType');
const Bomb = db.model('bomb');
const Squad = db.model('squad');
const PlayedModule = db.model('playedModule');


const seedUsers = function() {

    const users = [{
        email: 'tsa@tsa.tsa',
        password: 'password'
    }, {
        email: 'obama@gmail.com',
        password: 'potus'
    }, {
        email: 'adam@adam.adam',
        password: 'adam'
    }, {
        email: 'nat@nat.nat',
        password: 'nattyLite'
    }];

    const creatingUsers = users.map(userObj => User.create(userObj));
    return Promise.all(creatingUsers);

};

const seedModuleTypes = function() {
    const moduleTypes = [{ name: 'wires' }, { name: 'maze' }, { name: 'symbols' }, { name: 'morse-code' }];
    const creatingModuleTypes = moduleTypes.map(moduleTypeObj => ModuleType.create(moduleTypeObj));
    return Promise.all(creatingModuleTypes);
};

const seedBombs = function() {
    const Bombs = [{}, {}];
    const creatingBombs = Bombs.map(bombObj => Bomb.create(bombObj));
    return Promise.all(creatingBombs);
};

const seedSquads = function() {
    const Squads = [
        { bombId: 1, userId: 1 },
        { bombId: 1, userId: 2 },
        { bombId: 1, userId: 3 },
        { bombId: 1, userId: 4 },
        { bombId: 2, userId: 1 },
        { bombId: 2, userId: 2 }
    ];
    const creatingSquads = Squads.map(squadObj => Squad.create(squadObj));
    return Promise.all(creatingSquads);
};

const seedPlayedModules = function() {
    const PlayedModules = [
        { bombId: 1, userId: 1, moduleTypeId: 1, time: 30000, strikes: 0, completedStatus: 'success' },
        { bombId: 1, userId: 2, moduleTypeId: 1, time: 30000, strikes: 0, completedStatus: 'success' },
        { bombId: 1, userId: 3, moduleTypeId: 1, time: 30000, strikes: 1, completedStatus: 'success' },
        { bombId: 1, userId: 4, moduleTypeId: 1, time: 30000, strikes: 0, completedStatus: 'success' },
        { bombId: 2, userId: 1, moduleTypeId: 1, time: 30000, strikes: 1, completedStatus: 'success' },
        { bombId: 2, userId: 2, moduleTypeId: 1, time: 30000, strikes: 1, completedStatus: 'success' },
        { bombId: 2, userId: 1, moduleTypeId: 1, time: 30000, strikes: 0, completedStatus: 'success' },
        { bombId: 2, userId: 2, moduleTypeId: 1, time: 60000, strikes: 0, completedStatus: 'failed' }
    ];
    const creatingPlayedModules = PlayedModules.map(playedModuleObj => PlayedModule.create(playedModuleObj));
    return Promise.all(creatingPlayedModules);
};

db.sync({ force: true })
    .then(function() {
        return seedUsers();
    })
    .then(function() {
        console.log(chalk.green('Seeded Users...'));
        return seedModuleTypes();
    })
    .then(function() {
        console.log(chalk.green('Seeded ModuleTypes...'));
        return seedBombs();
    })
    .then(function() {
        console.log(chalk.green('Seeded Bombs...'));
        return seedSquads();
    })
    .then(function() {
        console.log(chalk.green('Seeded Squads...'));
        return seedPlayedModules();
    })
    .then(function() {
        console.log(chalk.green('Seed successful!'));
        process.exit(0);
    })
    .catch(function(err) {
        console.error(err);
        process.exit(1);
    });
