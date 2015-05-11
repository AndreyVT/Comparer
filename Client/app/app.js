/**
 * Created with IntelliJ IDEA.
 * User: AVT
 * Date: 19.01.15
 * Time: 22:15
 * To change this template use File | Settings | File Templates.
 */
var mainModule = angular.module('enterprise', ['ngRoute', 'ngResource', 'ngCookies']).
    config(function($routeProvider, $locationProvider) {
        console.log('======= ROUTE ==============');
        $routeProvider.
            when("/", {templateUrl:"partials/search.html", controller:"SearchController"}).
            when("/login", {templateUrl:"app/login/login.html", controller:"LoginController"}).
            when("/user", {templateUrl:"partials/userProfile.html", controller:"UserController"}).
            when("/search", {templateUrl:"partials/search.html", controller:"SearchController"}).
            when("/shops", {templateUrl:"partials/shops.html", controller:"ShopsCtrl"}).
            when("/newShop", {templateUrl:"partials/shop.html", controller:"newShopCtrl"}).
            when("/editShop/:shopId", {templateUrl:"partials/shop.html", controller:"editShopCtrl"}).
            when("/purchases", {templateUrl:"partials/purchases.html", controller:"PurchasesCtrl"}).
            when("/newPurchase", {templateUrl:"partials/new_purchase.html", controller:"newPurchaseCtrl"}).
            when("/editPurchase/:purchaseId", {templateUrl:"partials/new_purchase.html", controller:"editPurchaseCtrl"}).
            when("/records/:purchaseId", {templateUrl:"partials/records.html", controller:"RecordsCtrl"}).
            when("/newRecord/:purchaseId", {templateUrl:"partials/edit_record.html", controller:"NewRecordCtrl"}).
            when("/editRecord/:recordId", {templateUrl:"partials/edit_record.html", controller:"EditRecordCtrl"}).
            when("/edit/:id", {templateUrl:"partials/edit.html", controller:"EditCtrl"}).
            otherwise({redirectTo:"/search"});
    });
                                 //[$resource, $rootScope, USER_ROLES, AuthService, $cookie, ]
mainModule.controller('AppCtrl', ['$scope', '$resource', '$rootScope', '$cookies', 'AuthService', 'USER_ROLES', 'Session',
    function($scope, $resource, $rootScope, $cookies, AuthService, USER_ROLES, Session)    {

        $scope.serviceUrl = 'http://localhost:7777/api/v1';

        $scope.searchResults =   [ ];
        $scope.shopsList = [];

        $scope.shops = new ShopService($resource);
        $scope.purchases = new PurchasesService($resource);
        $scope.records = new RecordService($resource, $scope.serviceUrl);
        $scope.items = new ItemService($resource, $scope.serviceUrl);

        $scope.Services = {Shop: $scope.shops, Purchases: $scope.purchases, Records:$scope.records, Items: $scope.items};
        $rootScope.Services = $scope.Services; //{Shop: $scope.shops, Purchases: $scope.purchases, Records:$scope.records, Items: $scope.items};//$scope.Services;

        $scope.userId = 1;
        $scope.isLogged = true;

        $scope.currentUser = null;
        $scope.userRoles = USER_ROLES;

        $rootScope.setCurrentUser = function (user) {
            $scope.currentUser = user;
            console.log('=== Set current user: ', $scope.currentUser);
        };

        if (localStorage.getItem('cmpruser')){
            var data = JSON.parse(localStorage.getItem('cmpruser')) ; //{sessionId:'121212', id:'1', role:'admin', name:'admin'};
            Session.create(data.sessionId, data.id, data.role);
            $rootScope.setCurrentUser(data);
        }

        $scope.isAuthorized = AuthService.isAuthorized;




        //$http.defaults.headers.common['Cookie'] = 'cmpr=test cookie; domain=localhost';
    }]);

/*function EditCtrl($scope, $location, $routeParams)    {
    $scope.person = $scope.crew[$routeParams.id];

    $scope.save = function(){
        $location.path("/");
    }
}*/

/*function SearchCtrl($scope) {
    $scope.searchText = "";

    $scope.search = function()  {
        this.searchResults.length = 0;
        for(var i=0; i<this.products.length; i++) {
            var curItem = this.products[i];
            if (curItem.name.indexOf(this.searchText) >= 0)
                this.searchResults.push(curItem);
        }
    }
}*/


