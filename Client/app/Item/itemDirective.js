/**
 * Created with IntelliJ IDEA.
 * User: AVT
 * Date: 28.03.15
 * Time: 12:38
 * To change this template use File | Settings | File Templates.
 */

mainModule.directive('cmprItem', function() {
    return {
        restrict: 'E',
        scope: {
            itemInfo: '=itemm'
        },
        templateUrl: 'app/Item/itemDirective.html'
        /*link: function (scope, element, attrs) {
            console.log('-----------------------------------------');
            console.log(scope.itemInfo);
            console.log('-----------------------------------------');
            //this.item = $scope.items.GetItems(this.itemInfo);
        },*/
    };
})

/*mainModule.directive('cmprShop', function() {
    return {
        restrict: 'E',
        scope: {
            shopInfo: '=shop'
        },
        templateUrl: 'app/directives/shopTemplate.html'
    };
})*/

