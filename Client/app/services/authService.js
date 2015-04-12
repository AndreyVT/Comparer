/**
 * Created with IntelliJ IDEA.
 * User: AVT
 * Date: 04.04.15
 * Time: 17:23
 * To change this template use File | Settings | File Templates.
 */
mainModule.factory('AuthService', function ($http, Session) {

    $http.defaults.useXDomain = true;
    $http.defaults.headers['Access-Control-Allow-Origin'] = '*';
    console.log('== Credentials =======: ', $http.defaults );
    delete $http.defaults.headers.common['X-Requested-With'];

    var authService = {};

    authService.login = function (credentials) {
       // console.log('== Credentials =======: ', $http );

        return $http
            .post('http://localhost:7777/api/v1/user/login', credentials)
            .then(function (res) {
                console.log('== User from server =======: ', res );
                if (res.status === 204 )    {
                    console.log("User not found!");
                    return null;
                }
                Session.create(res.data.sessionId, res.data.id,
                    res.data.role);
                return res.data;
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
