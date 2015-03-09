/**
 * Created with IntelliJ IDEA.
 * User: AVT
 * Date: 14.02.15
 * Time: 13:32
 * To change this template use File | Settings | File Templates.
 */
function newShopCtrl($scope, $location)    {
    $scope.shop = {id:'', name:'', address:'', tag:''};

    var shopAdded = function(){$scope.shopsList = $scope.shops.ListShops();};

    $scope.save = function(){
        $scope.shops.CreateShop($scope.shop, shopAdded); //
        $location.path("/shops");
    }
}

function ShopsCtrl($scope) {
    $scope.shop = {name:'', address:'', tag:''};
    $scope.searchText = "";
    $scope.searchResults = [];

    $scope.shopsList = $scope.shops.ListShops();

    $scope.search = function()  {
        this.searchResults.length = 0;
        for(var i=0; i<this.products.length; i++) {
            var curItem = this.products[i];
            if (curItem.name.indexOf(this.searchText) >= 0)
                this.searchResults.push(curItem);
        }
    }
}

function editShopCtrl($scope, $location, $routeParams)    {
/*
    console.log('^^^ ==============');
    console.log('ShopID: ' + $routeParams.shopId);
*/
    $scope.shop =  $scope.shops.GetShop({id : $routeParams.shopId});
/*
    console.log('^^^ ==============');
    console.log($scope.shop);
*/
    $scope.save = function(){
        $scope.shops.UpdateShop($scope.shop, function(){$scope.shopsList = $scope.shops.ListShops();}); //

        $location.path("/shops");
    }
}
