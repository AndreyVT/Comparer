/**
 * Created with IntelliJ IDEA.
 * User: AVT
 * Date: 25.02.15
 * Time: 21:46
 * To change this template use File | Settings | File Templates.
 */

/*
* Список покупок
* */

function PurchasesCtrl($scope) {
    $scope.purchase = {name:'', shop:'', date:'', tag:''};
    $scope.searchText = "";
    $scope.searchResults = [];

    console.log('===============');
    console.log('function PurchasesCtrl');
    console.log('===============');
    $scope.purchasesList = $scope.purchases.ListPurchases({id: $scope.currentUser.id});
    //$scope.records = $scope.records.GetRecords(1);
};

function newPurchaseCtrl($scope, $location){
    $scope.selectedShop = {};

    $scope.listShops = $scope.shops.ListShops();
    console.log('===============');
    console.log('function newPurchaseCtrl');

    $scope.purchase = $scope.purchases.CreatePurchase({content: "", shop: 0, done: false, UserId: $scope.currentUser.id },
        function(params){
            console.log(params)
            $scope.purchase.name = 'Покупка' + $scope.purchase.id;
        });

    $scope.save = function(){
        $scope.purchases.UpdatePurchase($scope.purchase, function() {
            $location.path("/purchases");
        });
    }
};

function editPurchaseCtrl($scope, $location, $routeParams){
    $scope.selectedShop = {};

    $scope.listShops = $scope.shops.ListShops();

    $scope.purchase =  $scope.purchases.GetPurchase({id : $routeParams.purchaseId});
    $scope.purchase.id = $routeParams.purchaseId;

    $scope.save = function(){
        $scope.purchases.UpdatePurchase($scope.purchase, function() {
            $location.path("/purchases");
        }); //, purchasesAdded
    }
};
