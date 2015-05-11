/**
 * Created with IntelliJ IDEA.
 * User: AVT
 * Date: 14.02.15
 * Time: 20:06
 * To change this template use File | Settings | File Templates.
 */

var Model = require('./model.js');

var user = function() {

    // GET ALL users
    // Get full list of users
    var get = function(req, res, next) {
        console.log('=== Users list get ===');
        console.log(Model.User);
        console.log('======================');
        var response = res;
        //Model.User.sync({force: false}).then(function(){
            Model.User.findAll({
                where: {}}).success(function (result) {
                    response.writeHead(200, {'Content-Type': 'application/json; charset=utf-8'
                    });
                    response.end(JSON.stringify(result));
                })
        //})
    };

    // GET Purchase
    // Get one user by id
    var getById = function(req, res, next) {
        var response = res;
        Model.User.find({where : {id: req.params.id}}).success(function (result) {
            response.writeHead(200, {'Content-Type': 'application/json; charset=utf-8' });
            response.end(JSON.stringify(result));
        })
    };

    // Create new Purchase
    var createUser = function(req, res, next) {
        var newUser = req.params;
        Model.User.create(newUser).complete(function(err, func1) {
            res.writeHead(200, {'Content-Type': 'application/json; charset=utf-8'});
            res.end(JSON.stringify(func1));
            res.send();
        });
    };

    // login user
    var loginUser = function(req, res, next) {
        //console.log("====== Login user :: ", req.params);
        var credentials = req.params;
        Model.User.find({where : {name: credentials.username, password: credentials.password}}).success(function (result) {
            console.log("====== Result of search user :: ", result);
            if (result === null) {
                res.writeHead(204, {'Content-Type': 'application/json; charset=utf-8' });
                res.end(JSON.stringify({text: "No user."}));
            }
            else{
                res.writeHead(200, {'Content-Type': 'application/json; charset=utf-8' });
                //result.sessionId = Math.uuid(); // TODO нужно как то генерить уникальный ИД!!!
               // result.dataValues.sessionId = Math.getuid();
               /* var date =  new Date();
                date.setDate(date.getDate() + 7);
                res.setCookie('cmpr_cookie', 'cmpr_cookie_1111', {
                    expires: date
                });*/
                res.end(JSON.stringify(result.dataValues));
                res.send();
            }
        })
    };

    // UPDATE Purchase IN DB
    var update = function(req, res, next) {
        var tmpUser = req.params;
        Model.User.update(tmpPurchase, {where: { id : tmpUser.id }}).complete(function(err, func1) {
            if (!err) console.log('^^^===== ' + err)
            res.writeHead(200, {'Content-Type': 'application/json; charset=utf-8'
            });
            res.send();
        });
    };


    return {
        get : get,
        getById : getById,
        createUser : createUser,
        update : update,
        login: loginUser
    }
};
module.exports = new user();
