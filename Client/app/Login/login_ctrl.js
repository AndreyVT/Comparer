/**
 * Created with IntelliJ IDEA.
 * User: AVT
 * Date: 04.04.15
 * Time: 17:13
 * To change this template use File | Settings | File Templates.
 */

mainModule.controller('LoginController', function ($scope, $rootScope, $location, AUTH_EVENTS, AuthService) {
    $scope.credentials = {
        username: '',
        password: ''
    };
    $scope.login = function (credentials) {
        AuthService.login(credentials).then(function (user) {
            $rootScope.$broadcast(AUTH_EVENTS.loginSuccess);
            $rootScope.setCurrentUser(user);
            $location.path("/");
        }, function () {
            $rootScope.$broadcast(AUTH_EVENTS.loginFailed);
        });
    };
})
