function AuthController(){

    var roles;
    var user;
    function setRoles(role){
        roles = role;
        user.roles.role;
    }
    function setUser(inUser){
        user = inUser;
    }
    function isAuthorized(neededRole){
        if(user) {
            return user.isAuthorized(neededRole);
        }
    }

    function isAuthorizedAsync(neededRole, cb){
        setTimeout(function(){cb(roles.indexOf(neededRole) >= 0)}, 0);  
    }

    function isAuthorizedPromise(neededRole){
        return new Promise(function(resolve){
            setTimeout(function(){resolve(roles.indexOf(neededRole) >= 0)}, 0); 
        });
    }
    function getIndex(req, res){
        if(req.user.isAuthorized('admin')){
            return res.render('index');
        }
        res.render('error');
    }
    // function unTestedFn() {
    //     console.log('untested fn ran');
    // }
    console.log('testing a statement outside of a fn');
    return {isAuthorized, isAuthorizedAsync, setRoles, isAuthorizedPromise, getIndex, setUser};
}

module.exports = AuthController();