/**
 * Created with IntelliJ IDEA.
 * User: AVT
 * Date: 12.03.15
 * Time: 21:06
 * To change this template use File | Settings | File Templates.
 */

mainModule.directive('cmprPurchase', function() {
    return {
        restrict: 'E',
        scope: {
            purchaseInfo: '=purchase',
            rootService: '=root'
        },
        link: function($scope){
            var tmpDate = moment($scope.purchaseInfo.dateRecord);
            tmpDate.locale('ru');
            $scope.purchaseInfo.dateRecord = tmpDate.format('D MMMM YYYY');
            $scope.Shop = $scope.rootService.Shop.GetShop({id: $scope.purchaseInfo.ShopId});
            console.log("====> ", $scope.purchaseInfo);

        },
        templateUrl: 'app/directives/purchaseTemplate.html'
    };
})