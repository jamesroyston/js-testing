var assert = require('assert');
var expect = require('chai').expect;


describe('~~~Basic Mocha Test', function(){

    describe('should deal with objects', function() {

        it('should have a name property equal to james', function() {
            var obj = {
                name: 'james',
                gender: 'male'
            }
            var objB = {
                name: 'james',
                gender: 'male'
            }
            expect(obj).to.have.property('name').to.equal('james');
            expect(obj).to.deep.equal(objB);

            
        })
    })
})
/*if using should instead of expect, keep in mind that null needs to be handled differently

ex: 

this works-
    expect(null).to.not.exist

also works-
    var should = require('chai').should();
    var iAmNull = null
    should.not.exist(iAmNull)
traditional 'should' statements do not-
    normally should doesn't need to be defined because chai adds .should to the prototype
    var iAmNull = null
    iAmNull.should.not.exist
    => TypeError: cannot read property 'should' of null  */