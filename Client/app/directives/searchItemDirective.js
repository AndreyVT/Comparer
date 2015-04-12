/**
 * Created with IntelliJ IDEA.
 * User: AVT
 * Date: 12.04.15
 * Time: 9:32
 * To change this template use File | Settings | File Templates.
 */

mainModule.directive('cmprSearchitem', function() {
    return {
        restrict: 'E',
        scope: {
            itemInfo: '=item',
            services: '=root'
        },
        templateUrl: 'app/directives/searchItemTemplate.html',
        controller: function($scope, $rootScope)
        {
            $scope.stats = function(itemId){
                console.log('Stats click : ', itemId);
                console.log($scope.services);
            }
        }
    };
})
