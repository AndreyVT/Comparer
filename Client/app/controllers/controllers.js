app.controller('mainController', function ($scope, itemsService){

  $scope.dateValue = new Date();

  $scope.isAddItem = false;  

  init();

  function init() {
      $scope.dateValue = new Date();
      
  }

/*    $scope.insertCustomer = function () {
        var firstName = $scope.newCustomer.firstName;
        var lastName = $scope.newCustomer.lastName;
        var city = $scope.newCustomer.city;
        customersService.insertCustomer(firstName, lastName, city);
        $scope.newCustomer.firstName = '';
        $scope.newCustomer.lastName = '';
        $scope.newCustomer.city = '';
    };

    $scope.deleteCustomer = function (id) {
        customersService.deleteCustomer(id);
    };*/
});

app.controller('resultController', function ($scope, itemsService){

  $scope.results = [];

  init();

  function init() {
    $scope.results = itemsService.getItems();
  };

});

app.controller('addItemController', function ($scope, itemsService){

  $scope.shop = {};
  $scope.shops = [];
  $scope.dateValue = new Date();
  $scope.numberValue = 0;
  $scope.itemName = 'test name';

  $scope.results = [];

  init();

  function init() {
    $scope.shops = itemsService.getShops();
  };

  $scope.addItem = function() {
    var newItem = {id:1, name:$scope.itemName, shopId:$scope.shop.id, shopName:$scope.shop.name, date:$scope.dateValue, price:$scope.numberValue};
    itemsService.addItem(newItem);

    $scope.results = itemsService.getItems();
  };

});