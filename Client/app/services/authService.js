/**
 * Created with IntelliJ IDEA.
 * User: AVT
 * Date: 04.04.15
 * Time: 17:23
 * To change this template use File | Settings | File Templates.
 */
mainModule.factory('AuthService', function ($http, Session) {
    var authService = {};

    authService.login = function (credentials) {
        console.log('== Credentials =======: ', credentials);
        return $http
            .post('http://localhost:7777/api/v1/user/login', credentials)
            .then(function (res) {
                //console.log('--------- Auth result ::', res);
               localStorage['cmpruser'] = JSON.stringify(res.data);
                var data = res.data; //{sessionId:'121212', id:'1', role:'admin', name:'admin'};
                Session.create(data.sessionId, data.id,
                    data.role);
                return data;
            });
    };

    authService.isAuthenticated = function () {
        return !!Session.userId;
    };

    authService.isAuthorized = function (authorizedRoles) {
        if (!angular.isArray(authorizedRoles)) {
            authorizedRoles = [authorizedRoles];
        }
        return (authService.isAuthenticated() &&
            authorizedRoles.indexOf(Session.userRole) !== -1);
    };

    return authService;
})
