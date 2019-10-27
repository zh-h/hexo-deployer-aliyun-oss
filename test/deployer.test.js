const deplpoer = require('../lib/deployer');
const should = require('chai').should();
const assert = require('chai').assert;

function callbackFunction(params) {
    return true;
}

describe('deployer test', () => {
    it('check config', () => {
        assert.equal(true, deplpoer({}, callbackFunction));
    });
})

