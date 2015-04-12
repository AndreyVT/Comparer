/**
 * Created with IntelliJ IDEA.
 * User: AVT
 * Date: 12.04.15
 * Time: 9:21
 * To change this template use File | Settings | File Templates.
 */
function SearchController($scope, $filter) { //$routeParams
    $scope.itemsList = {};
    $scope.fullItemsList = {};
    $scope.searchText = "";
    $scope.searchResultVisible = false;
    //$scope.mainScope = $scope;

    var AllowedItemNameLength = 2;

    $scope.searchTextChanged = function(){
        $scope.searchResultVisible = $scope.searchText.length > AllowedItemNameLength;
        if ($scope.searchText.length === AllowedItemNameLength + 1)  {  // для того что бвы все время не обращатся к базе
            $scope.fullItemsList = $scope.items.ListItems({id: $scope.searchText});
            $scope.itemsList = $scope.fullItemsList;
        }
        else    { // применяем фильтр
            $scope.itemsList = $filter('filter')($scope.fullItemsList, $scope.searchText);
        }
    };
}

