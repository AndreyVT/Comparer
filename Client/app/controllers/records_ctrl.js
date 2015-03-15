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

function RecordsCtrl($scope, $routeParams)    {
    $scope.purchase = $scope.purchases.GetPurchase({id: $routeParams.purchaseId});

    $scope.RecordsList = $scope.records.ListRecords({PurchaseId : $routeParams.purchaseId});
};

function NewRecordCtrl($scope, $location, $routeParams)    {

    $scope.record = $scope.records.CreateRecord({PurchaseId: $routeParams.purchaseId});
    $scope.record.PurchaseId = $routeParams.purchaseId;

    $scope.save = function(){
        $scope.records.UpdateRecord($scope.record, function() {
            $location.path("/records/" + $scope.record.PurchaseId);
        });
    }
};
