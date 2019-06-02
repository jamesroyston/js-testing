var assert = require('assert');
var authController = require('../../controllers/auth.controller');
var expect = require('chai').expect;
var chai = require('chai')
var chaiAsPromised = require('chai-as-promised')
var should = require('chai').should();
var sinon = require('sinon')
chai.use(chaiAsPromised)
chai.should()


describe('~~~authController', function() {

    describe('isAuthorized', function() {
        var user = {}
        beforeEach(function() {
            user = {
                roles: ['user'],
                isAuthorized: function(neededRole) {
                    return this.roles.indexOf(neededRole) >= 0;
                }
            }
            sinon.spy(user, 'isAuthorized');
            authController.setUser(user);
        })
        it('should return false if not auth', function() {
            // assert.equal(false, authController.isAuthorized('admin'))
            var isAuth = authController.isAuthorized('admin');
            console.log(user.isAuthorized)
            user.isAuthorized.calledOnce.should.be.true
            expect(isAuth).to.be.false;
            console.log('is admin authorized? ', authController.isAuthorized('admin'));
        })

        it('should return true if authorized', function() {
            assert.equal(true, authController.isAuthorized('user'));
            console.log('is user authorized? ', authController.isAuthorized('user'));
        })

        
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

    describe.only('getIndex', function() {
        var user = {}
        beforeEach(function() {
            user = {
                roles: ['user'],
                isAuthorized: function(neededRole) {
                    return this.roles.indexOf(neededRole) >= 0;
                }
            }
        })


            // beforeEach(function() {
            //     sandbox = sinon.sandbox.create();
            // })
            // afterEach(function() {
            //     sandbox.restore()
            // })

            // we call authcontroller.getindex
            // but we need to pass things into getIndex....
            // ie req and res
            it('should render index if authorized', function() {
                var isAuth = sinon.stub(user, 'isAuthorized').returns(true)
                var req = { user: user}
                var res = {
                    render: sinon.spy()
                }
                var spy = res.render;
                // NOTE: in v1, console log would show the function call data
                authController.getIndex(req, res);
                // console.log(spy)
                // this returns [function] instead of the functions values
                console.log('spy arguments', spy.args)
                isAuth.calledOnce.should.be.true
                spy.calledOnce.should.be.true
                spy.firstCall.args[0].should.equal('index')
            })
        })
});

/*
    Notes Section
    we can use 
        var func = sinon.spy() to track a functions exection
        i.e. a fake function

    

    

*/