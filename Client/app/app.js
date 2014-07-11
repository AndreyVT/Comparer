/*#######################################################################
  /app
      /controllers      
      /directives
      /services
      /partials
      /views

  #######################################################################*/

var app = angular.module('itemsApp', ['ngRoute']);

app.config(function ($routeProvider) {
    $routeProvider
        .when('/find',
            {
                controller: 'FindController',
                templateUrl: '/app/partials/finder.html'
            })
        //Define a route that has a route parameter in it (:customerID)
        .when('/customerorders/:customerID',
            {
                controller: 'CustomerOrdersController',
                templateUrl: '/app/partials/customerOrders.html'
            })
        //Define a route that has a route parameter in it (:customerID)
        .when('/',
            {
                controller: 'mainController',
                templateUrl: '/app/partials/items.html'
            })
        .otherwise({ redirectTo: '/' });
});

app.directive("itemDescription", function() {
    return {
      restrict: 'E',
      templateUrl: "app/directives/item-description.html"
    };
  });