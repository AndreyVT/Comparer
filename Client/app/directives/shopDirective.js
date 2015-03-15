/**
 * Created with IntelliJ IDEA.
 * User: AVT
 * Date: 14.03.15
 * Time: 14:26
 * To change this template use File | Settings | File Templates.
 */

mainModule.directive('cmprShop', function() {
    return {
        restrict: 'E',
        scope: {
            shopInfo: '=shop'
        },
        templateUrl: 'app/directives/shopTemplate.html'
    };
})

/*
 var gg = function($location) {
 $location.path("#/editShop/{{shopInfo.id}}");
 }
    ,
    controller: function($scope, $location) {

},
link: function ($scope, element, attrs, $location) {
    element.on('click', function () {
        gg($location);
    })
}*/
