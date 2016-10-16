/*jshint esversion: 6 */
'use strict'

const expect = require('chai').expect;
const assert = require('chai').assert;
const supertest = require('supertest');
const _ = require('lodash');
const wireGenerator = require('../../../server/app/utilities/mod-1-wires/wireGenerator.js');
const wireSolver = require('../../../server/app/utilities/mod-1-wires/wireSolver.js');


describe('wireGenerator', function () {

    it('has a generate function method', function () {
        expect(wireGenerator).to.have.property('generate');
        assert.isFunction(wireGenerator.generate, 'wire generator is a method.')
    });

    describe('generate', function () {

        let game = {
            batteries: [{
                userAssigned: 0,
                color: 'green'
            }, {
                userAssigned: 0,
                color: 'yellow'
            }]
        };

        it('returns an array', function () {
            let wires = wireGenerator.generate(game);
            console.log(wires);
            expect(wires).to.be.an('array');
        });

        it('never returns an array that is longer than 6 elements', function () {
            let truthArray = [];
            for (let i = 0; i < 10; i++) {
                truthArray.push(wireGenerator.generate(game).length);
            };
            let reduced = truthArray.map((len) => {
                if (len > 6) return false;
                return true;
            }).reduce((prev, curr) => prev && curr);
            console.log(reduced);
            expect(reduced).to.be.true;
        });

        it('returns a contiguous unique index for every wire', function () {
            let testWires = wireGenerator.generate(game);
            let indexMap = testWires.map((obj) => obj.index);
            console.log(indexMap);
            let unique = true;
            for (let i = 0; i < indexMap.length; i++) {
                if (indexMap.indexOf(i) === -1) {
                    unique = false;
                    break;
                } else {
                    i++;
                }
            };
            expect(unique).to.be.true;
        });

    });

});

describe('wireSolver', function () {

    it('is an object', function () {
        expect(wireSolver).to.be.an('object');
    });

    it('has a method solve', function () {
        expect(wireSolver).to.have.property('solve');
        assert.isFunction(wireSolver.solve, 'solve is a method.');
    });

    describe('wireSolver.solve', function () {
        let batt1 = [{
            userAssigned: 0,
            color: 'green'
        }, {
            userAssigned: 0,
            color: 'green'
        }]

        let batt2 = [{
            userAssigned: 0,
            color: 'green'
        }, {
            userAssigned: 0,
            color: 'yellow'
        }]

        let batt3 = [{
            userAssigned: 0,
            color: 'yellow'
        }, {
            userAssigned: 0,
            color: 'yellow'
        }]

        let batt4 = [{
            userAssigned: 0,
            color: 'yellow'
        }, {
            userAssigned: 0,
            color: 'blue'
        }]

        let batt5 = [{
            userAssigned: 0,
            color: 'blue'
        }, {
            userAssigned: 0,
            color: 'blue'
        }]

        let batt6 = [{
            userAssigned: 0,
            color: 'blue'
        }, {
            userAssigned: 0,
            color: 'green'
        }]

        let batt7 = [{
            userAssigned: 0,
            color: 'blue'
        }, {
            userAssigned: 0,
            color: 'blue'
        }, {
            userAssigned: 0,
            color: 'yellow'
        }];

        describe('threeWireSolver', function () {
            it('follows the first conditional', function () {
                let game1 = ['blue', 'red', 'white'];
                let wireCut = wireSolver.solve(game1, batt7);
                expect(wireCut).to.be.equal(0);
            })
            it('follows the second conditional', function () {
                let game2 = ['blue', 'yellow', 'yellow'];
                let wireCut = wireSolver.solve(game2, batt4);
                expect(wireCut).to.be.equal(1);
            });
            it('follows the third conditional', function () {
                let game3 = ['red', 'white', 'white'];
                let wireCut = wireSolver.solve(game3, batt5);
                expect(wireCut).to.be.equal(2);
            });
            it('follows the fourth conditional', function () {
                let game4 = ['black', 'white', 'white'];
                let wireCut = wireSolver.solve(game4, batt2);
                expect(wireCut).to.be.equal(0);
            });
            it('follows the fifth conditional', function () {
                let game5 = ['blue', 'blue', 'red'];
                let wireCut = wireSolver.solve(game5, batt6);
                expect(wireCut).to.be.equal(1);
            });
            it('follows the sixth conditional', function () {
                let game5 = ['red', 'aquamarine', 'taupe'];
                let wireCut = wireSolver.solve(game5, batt6);
                expect(wireCut).to.be.equal(2);
            });
        })


    });

});