/**
 * Created with IntelliJ IDEA.
 * User: AVT
 * Date: 15.03.15
 * Time: 11:56
 * To change this template use File | Settings | File Templates.
 */

function EditRecordCtrl($scope, $location, $routeParams)    {
    $scope.record =  $scope.records.GetRecord({id : $routeParams.recordId});

    $scope.save = function(){
        $scope.records.UpdateRecord($scope.record, function(){
            $scope.recordsList = $scope.records.ListRecords($scope.record.PurchaseId);
        });

        $location.path("/records/" + $scope.record.PurchaseId);
    }
};

function RecordsCtrl($scope, $routeParams, $filter, $location)    {
    var purchaseId = $routeParams.purchaseId;
    $scope.purchase = $scope.purchases.GetPurchase({id: purchaseId});
    $scope.RecordsList = $scope.records.ListRecords({id : purchaseId});

    $scope.fullItemsList = {};
    $scope.itemsList = {};
    $scope.searchResultVisible = false;
    $scope.itemName = "";
    $scope.itemArtikul = "";
    $scope.price = 0;

    //$scope.newRecord = {PurchaseId: $scope.purchase.id, UserId: $scope.userId};

    var AllowedItemNameLength = 2;

    $scope.itemNameChange = function(){
        $scope.searchResultVisible = $scope.itemName.length > AllowedItemNameLength;
        if ($scope.itemName.length === AllowedItemNameLength + 1)  {  // для того что бвы все время не обращатся к базе
            $scope.fullItemsList = $scope.items.ListItems({id: $scope.itemName});
            $scope.itemsList = $scope.fullItemsList;
        }
        else    {
            $scope.itemsList = $filter('filter')($scope.fullItemsList, $scope.itemName);
        }
    };

    $scope.addRecord = function(purchaseId){
        $scope.record = $scope.records.CreateRecord({PurchaseId: purchaseId }, function(param){
            $scope.RecordsList.push(param);
        });
    }

    $scope.addFullRecord = function(record){
        $scope.record = $scope.records.CreateRecord(record, function(param){
            console.log('######## record Aded')
            console.log(param)
            //$location.path("/records/" + param.PurchaseId)
            $scope.RecordsList = $scope.records.ListRecords({id : param.PurchaseId});
        });
    }

    $scope.addItemToRecord = function(item, purchase, price){
        var newRecord = {price: price, PurchaseId: purchase.id, ItemId: item.id};
        console.log('======= NEW RECORD ===============');
        console.log(item)
        console.log('======================')
        console.log(purchase)
        console.log('======================')
        console.log(price)
        console.log('======================')
        $scope.addFullRecord(newRecord);
        $scope.itemName = "";
    };

    $scope.addNewItem = function() {
        $scope.items.CreateItem({name: $scope.itemName, artikul: $scope.itemArtikul, UserId: $scope.userId}, function(done){
            console.log(done);
            $scope.itemsList = $scope.items.ListItems({id: $scope.itemName});
            $scope.itemArtikul = "";
        });
    };

    $scope.isAddItem = function(){
        return  ($scope.itemName.length > AllowedItemNameLength & $scope.itemsList.length === 0);
    };
};

function NewRecordCtrl($scope, $location)    {//$location,

    $scope.record = {};

    $scope.addRecord = function($scope){
        console.log('.addRecord.');
        $scope.record = $scope.records.CreateRecord({PurchaseId: $scope.purchase.purchaseId}, function(done){
            console.log('######## record Aded')
            console.log(done)
            $location.path("/records/" + $scope.purchase.purchaseId);
        });
        //$scope.record.PurchaseId = $scope.purchase.purchaseId;
    }

    $scope.save = function(){
        $scope.records.UpdateRecord($scope.record, function() {
            //$location.path("/records/" + $scope.record.PurchaseId);
        });
    }
};
