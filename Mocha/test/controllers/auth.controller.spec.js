var assert = require('assert');
var authController = require('../../controllers/auth.controller');
var expect = require('chai').expect;
var chai = require('chai')
var chaiAsPromised = require('chai-as-promised')
chai.use(chaiAsPromised)


describe('~~~authController', function() {
    beforeEach(function beforeEachFn() {
                authController.setRoles(['user'])
            })
    describe('isAuthorized', function() {
        it('should return false if not auth', function() {
            assert.equal(false, authController.isAuthorized('admin'))
            var isAuth = authController.isAuthorized('admin');
            expect(isAuth).to.be.false;
            console.log('is admin authorized? ', authController.isAuthorized('admin'));
        })

        it('should return true if authorized', function() {
            assert.equal(true, authController.isAuthorized('user'));
            console.log('is user authorized? ', authController.isAuthorized('user'));
        })

        it('should not make gets when not authorized');
        
    })

    describe('isAuthorizedAsync', function() {

        it('should return false if not auth', function(done) {
            authController.isAuthorizedAsync('admin',
            function(isAuth) {
                assert.equal(false, isAuth);
                done();
            })
        })

    })

    describe('isAuthorizedPromise', function() {
        it('should return false if not authorized', function(){
            return expect(authController.isAuthorizedPromise('admin')).to.eventually.be.false;
        })
        it('should return true if authorized', function(){
            return expect(authController.isAuthorizedPromise('user')).to.eventually.be.true;
        })
    })

});