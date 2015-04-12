/**
 * Created with IntelliJ IDEA.
 * User: AVT
 * Date: 05.04.15
 * Time: 10:41
 * To change this template use File | Settings | File Templates.
 */

mainModule.directive('cmprLogin', function() {
    return {
        restrict: 'E',
        require: ['', '^ngModel'],
        scope: false,
       /* scope:{
        },*/
        /*link: function ($scope) {

            console.log('========= Scope user: ', $scope);
        },*/
        controller: function($scope) {
            console.log('cmprLogin controller: ', $scope);
        },
        templateUrl: 'app/Login/loginTemplate.html'
    };
})
